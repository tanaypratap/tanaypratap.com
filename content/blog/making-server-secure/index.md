---
title: simple guide to make your servers secure
date: '2017-06-21T23:46:37.121Z'
type: 'blog'
tags: ['cloud', 'security']
---


![A digital lock for vault!](./digital-lock-vault.jpeg)

In startups, we often ignore security because it consumes extra time and we are always asked to focus on more important things. However, having a secure system becomes critical when you scale your systems as your startup grows. To make sure that your insecure system does not create hurdles when you onboard more users, you should secure your system at the early stage of your startup.

In this blog, I will show you some small steps which can be taken to make sure that security of your cloud servers is not compromised by an open port or an open service running on your server.

We at Artifacia, use Ubuntu extensively, and steps mentioned in this blog are tested on the same.

As iptables is a built-in firewall present in all Linux based servers, you can use the same steps in other distros.

#### 1. VIEW/DELETE IPTABLE COMMANDS
First of all, check if everything is clean in your iptables configuration.

```sudo iptables -L```
After every addition in your iptables, run this command to see the changes.

```sudo iptables -S```
If something is inserted by mistake, you can use below command to clean the slate and start over.

```sudo iptables -F```

#### 2. INSERTING RULES: ALLOWING HTTP, SSH, HTTPS
**First Rule:** Any incoming connection from a previously established connection should be allowed.

```sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT```

***Second Rule:*** Allow SSH on port 22, HTTP on port 80, and HTTPS on port 443.

```
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT

sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT

sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT
```

**Third Rule:** Allow loopback to accept connections, so that localhost connections work. 

*The -I flag inserts this rule to the top of the list.*

```sudo iptables -I INPUT 1 -i lo -j ACCEPT```

#### 3. DROP POLICY
Make sure your default policy is accepting incoming connections. This ensures that you don't accidentally get locked out of your own account. If the iptables are flushed/deleted, this default rule will let you in as the default rule doesn't get deleted by default.

```sudo iptables -P INPUT ACCEPT```

Now, you add a rule to drop the incoming connections as the last rule of the iptable.

```sudo iptables -A INPUT -j DROP```

#### 4. TO ADD NEW RULES IN FUTURE
We are done with iptables configuration here, but if you add another rule, it will go to the bottom by default and won't work after the DROP rule. To solve this issue, get all the iptable policies listed by number and follow the same set of steps you took to insert the loopback accept rule.

```sudo iptables -L --line-numbers```
Now, you can insert the rule at your preferred line number.

```sudo iptables -I INPUT <LINE_NUMBER> <NEW_RULE_HERE>```

#### 5. TEST BEFORE MOVING AHEAD
Before you make these rules permanent, you should test it once. If you restart the server now, the rules will be lost. So, in case you get locked out you can restart it and login back to the server. Now, we'll log out and test that we can log in back.

#### 6. MAKING THE RULES PERMANENT
Install iptables-persistent. This will create a script which will load our configuration when the system reboots.
```
sudo apt-get update

sudo apt-get install iptables-persistent
```

#### 7. UPDATING THE PERMANENT RULES
You need to keep in mind that you update the iptables-persistent whenever you make a change to iptables by using this command.
```sudo invoke-rc.d iptables-persistent save```

#### 8. Configuration for IPv6
In above steps, we covered IPv4 rules and skipped IPv6 completely. The adoption of IPv6 is still not popular and there's not much information around it. However, chances are that it can be exploited if left open. So, let's set up a default DROP policy on the IPv6 table and save it for persistence.

**View the IPv6 table**

View your IPv6 table by this command.

```sudo ip6tables -L```
See, that the default policy is accepting incoming connections. Now, change it to drop connections.

```sudo ip6tables -P INPUT DROP```
As mentioned earlier, you should save the changes every time.

sudo invoke-rc.d iptables-persistent save

#### 9. ALLOW ICMP
We have allowed all important protocols till now, but sometimes you need 'ping' to test whether your server is up or not. This could be a good test for our current rules. Try pinging your server IP before applying the rule and it should drop.

Now, we'll get the line number using this command.

```sudo iptables -L --line-numbers```
Suppose your DROP rule is at line 6, then you need to insert this rule at line 6. This will move the default drop rule to line 7.

```sudo iptables -I INPUT 6 -p icmp --icmp-type echo-request -j ACCEPT```
If you check now, your ping requests will start working.

Here are some handy commands, you may need.

**DELETING A RULE**

```
sudo iptables -L --line-numbers
sudo iptables -D INPUT 6
```

**ALLOWING SPECIFIC IPs**
```iptables -I INPUT 6 -s allowsomething.com, 112.113.114.115 -p tcp --dport 2345 -j ACCEPT```

Hope this tutorial help you make your server secure and ready for your startup growth.
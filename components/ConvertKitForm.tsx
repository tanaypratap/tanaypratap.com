import {
  Input,
  useColorModeValue,
  Button,
  Stack,
  Icon,
  Heading,
  Text,
  Center,
} from "@chakra-ui/react";
import { FormEventHandler, useCallback, useState } from "react";
import { NotificationIcon } from "./Newsletter";

const ConvertkitSignupForm: React.FC<
  React.PropsWithChildren<{
    formId: string;
  }>
> = ({ formId, children }) => {
  const name = "email";
  const [success, setSuccess] = useState<boolean | undefined>();

  const onSubmit: FormEventHandler = useCallback(
    async (event) => {
      event.preventDefault();

      const target = event.target as HTMLFormElement;
      const data = new FormData(target);
      const email = data.get(name);

      const body = JSON.stringify({
        formId,
        email,
      });

      const headers = new Headers({
        "Content-Type": "application/json; charset=utf-8",
      });

      try {
        const data = await fetch(`/api/convertkit/subscribe`, {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          headers,
          body,
        });

        // console.info({ data });

        setSuccess(true);
      } catch {
        setSuccess(false);
      }
    },
    [formId]
  );

  // if (success === false) {
  //   return <p>Apologies, an error occurred</p>;
  // }

  // if (success) {
  //   return (
  //     <p>
  //       You&apos;re in! Thank you for subscribing. Please check your mailbox for
  //       confirmation
  //     </p>
  //   );
  // }

  return (
    <Stack boxShadow={"lg"} rounded={"lg"} p={12} spacing={8} align={"center"}>
      {/* <ConvertkitSignupForm formId={"3032616"} /> */}
      <Icon as={NotificationIcon} w={24} h={24} />
      <Stack align={"center"} spacing={2}>
        <Heading
          textTransform={"uppercase"}
          fontSize={"3xl"}
          color={"gray.800"}
        >
          Subscribe
        </Heading>
        <Text fontSize={"lg"} color={"gray.500"}>
          Subscribe to my newsletter & stay up to date!
        </Text>
      </Stack>
      {success && (
        <Text textAlign={"center"}>
          You&apos;re in! Thank you for subscribing.
          <br />
          <strong>Please check your mailbox for confirmation</strong>
        </Text>
      )}
      {success === false && (
        <Text>Apologies, an error occurred. Please try again.</Text>
      )}
      {success === undefined ? (
        <form
          target='_blank'
          className={`space-around flex w-full flex-grow justify-center`}
          onSubmit={onSubmit}
        >
          <Stack
            spacing={4}
            direction={{ base: "column", md: "row" }}
            w={"full"}
          >
            <Input
              type={"email"}
              placeholder={"john@doe.net"}
              color={"gray.800"}
              bg={"gray.100"}
              rounded={"full"}
              border={0}
              name={name}
              aria-label='Your email address'
              _focus={{
                bg: "gray.200",
                outline: "none",
              }}
              required
            />
            <Button
              bg={"#152A72"}
              rounded={"full"}
              color={"white"}
              type='submit'
              flex={"1 0 auto"}
              _hover={{ bg: "#152A72" }}
              _focus={{ bg: "#152A72" }}
            >
              {children ?? "Subscribe"}
            </Button>
          </Stack>
        </form>
      ) : null}
    </Stack>
    // <>
    //   <form
    //     target='_blank'
    //     className={`space-around flex w-full flex-grow justify-center`}
    //     onSubmit={onSubmit}
    //   >
    //     <Input
    //       type={"email"}
    //       placeholder={"john@doe.net"}
    //       // color={useColorModeValue("gray.800", "gray.200")}
    //       // bg={useColorModeValue("gray.100", "gray.600")}
    //       rounded={"full"}
    //       border={0}
    //       name={name}
    //       aria-label='Your email address'
    //       _focus={{
    //         // bg: useColorModeValue("gray.200", "gray.800"),
    //         outline: "none",
    //       }}
    //       required
    //     />
    //     {/* <input
    //       type='email'
    //       name={name}
    //       aria-label='Your email address'
    //       placeholder='your@email.com'
    //       required
    //     /> */}

    //     {/* <button>{children ?? "Sign up"}</button> */}
    //     <Button
    //       bg={"#152A72"}
    //       rounded={"full"}
    //       color={"white"}
    //       type='submit'
    //       flex={"1 0 auto"}
    //       _hover={{ bg: "blue.500" }}
    //       _focus={{ bg: "blue.500" }}
    //     >
    //       {children ?? "Subscribe"}
    //     </Button>
    //   </form>

    //   {/* <p className={"mt-2 text-center text-sm md:text-xs"}>
    //     Subscribe to our newsletter to receive updates
    //   </p> */}
    // </>
  );
};

export default ConvertkitSignupForm;

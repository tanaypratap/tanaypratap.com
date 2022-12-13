import Link from "next/link";
import { useRouter } from "next/router";

export default function SideNav({ header, navList, base }: any) {
  const router = useRouter();

  return (
    <>
      <h2>{header}</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {navList.map((navItem: any) => {
          return (
            navItem.priority === 0 && (
              <ul style={{ padding: "0" }} className='drop-parent'>
                <li>
                  <Link href={`/${base}/${navItem.link}`}>
                    {/* <a
                      style={{
                        fontWeight:
                          router.asPath == `/${base}/${navItem.link}`
                            ? "600"
                            : "",
                      }}
                    > */}
                    {navItem.title}
                    {/* </a> */}
                  </Link>
                </li>

                {router.asPath == `/${base}/${navItem.link}`
                  ? navItem.list?.map((item: any) => {
                      return (
                        <li
                          key={item.id}
                          style={{
                            paddingLeft: "1.5rem",
                            display:
                              router.asPath == `/${base}/${navItem.link}`
                                ? "list-item"
                                : "none",
                          }}
                        >
                          <Link href={`/${base}/${item.link}`}>
                            {/* <a
                            style={ {
                              fontWeight:
                                router.asPath == `/${base}/${item.link}`
                                  ? "600"
                                  : "",
                            } }
                          > */}
                            {item.title}
                            {/* </a> */}
                          </Link>
                        </li>
                      );
                    })
                  : navItem.list?.find(
                      (item: any) => `/${base}/${item.link}` === router.asPath
                    ) != undefined
                  ? navItem.list?.map((item: any) => {
                      return (
                        <li
                          key={item.id}
                          style={{
                            paddingLeft: "1.5rem",
                          }}
                        >
                          <Link href={`/${base}/${item.link}`}>
                            {/* <a
                              style={ {
                                fontWeight:
                                  router.asPath == `/${base}/${item.link}`
                                    ? "600"
                                    : "",
                              } }
                            > */}
                            {item.title}
                            {/* </a> */}
                          </Link>
                        </li>
                      );
                    })
                  : null}
              </ul>
            )
          );
        })}
      </ul>
    </>
  );
}

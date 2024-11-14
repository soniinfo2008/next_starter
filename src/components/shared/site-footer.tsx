"use client";

import Link from "next/link";
import { useState } from "react";

import { useDeviceType } from "@/hooks/use-device-type";
import { cn } from "@/lib/utils";

const SiteFooter = () => {
  const { device, loading } = useDeviceType();

  const [isShowFooter, setIsShowFooter] = useState(false);

  const inSmallScreen = device === "Mobile" || device === "Tablet";

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {inSmallScreen ? (
        <>
          <button
            type="button"
            className={cn(
              "flex w-full items-center justify-between gap-4 bg-muted p-3 text-sm focus:outline-none sm:px-10 lg:hidden",
              isShowFooter ? "border-b" : ""
            )}
            onClick={() => setIsShowFooter(!isShowFooter)}
          >
            <span>More about us</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={cn(
                isShowFooter ? "z-10 rotate-180 transform" : "",
                "h-5 w-5 transition duration-300"
              )}
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          {isShowFooter && <Footer />}
        </>
      ) : (
        <Footer />
      )}
    </>
  );
};

export default SiteFooter;

const Footer = () => {
  return (
    <footer className="w-full justify-center bg-muted p-3 text-sm sm:p-10">
      <div className="lg:container lg:mx-auto lg:max-w-6xl">
        <div className="mb-4 flex h-full w-full flex-col flex-wrap items-start justify-start gap-5 overflow-hidden sm:mb-8 sm:max-h-[35rem] sm:gap-10 xl:max-h-80">
          {/* mega menu  */}

          {/* <div className="max-w-xs">
        <a
          href="{item.link || '#'} "
          target="_blank"
          aria-label="Click to visit this page"
          className="block"
        >
          <h6 className="mb-4 whitespace-nowrap uppercase">asdfasdf</h6>
        </a>

        <h6 className="mb-4 whitespace-nowrap uppercase">asdfasdf</h6>

        <ul className="flex flex-col gap-1 text-zinc-500">
          <li className="flex max-w-max items-center">
            <a
              href="{item2.link || '#'} "
              target="_blank"
              aria-label="Click to visit this page"
              className="link-underline link-underline-gray whitespace-pre-wrap"
            >
              asdfasdf
            </a>

            <p>asdfa</p>
          </li>

          <li className="flex max-w-max items-center">
            <a
              href="{$page.data.store?.adminUrl || '#'} "
              target="_blank"
              aria-label="Click to visit this page"
              className="link-underline link-underline-gray whitespace-pre-wrap"
            >
              Vendor Login
            </a>
          </li>

          <li className="flex max-w-max items-center">
            <a
              href="{$page.data.store?.adminUrl}?role=vendor&store={$page.data.storeId}"
              target="_blank"
              aria-label="Click to visit this page"
              className="link-underline link-underline-gray whitespace-pre-wrap"
            >
              Join as Vendor
            </a>

            <div className="bg-primary-500 ml-2 max-w-max rounded px-1 py-[0.1rem] text-[0.5rem] font-semibold leading-3 tracking-wider text-white">
              NEW
            </div>
          </li>
        </ul>
      </div> */}

          {/* <div>
        <h6 className="mb-4 whitespace-nowrap uppercase">Collections</h6>

        <ul className="flex flex-col gap-1 text-zinc-500">
          <li className="flex max-w-max items-center">
            <a
              href="{navigateToProperPath(category.link || category.slug, $page.data.origin)}"
              aria-label="Click to visit this page"
              className="link-underline link-underline-gray whitespace-pre-wrap"
            >
              sdfasdf
            </a>

            <div className="bg-primary-500 ml-2 max-w-max rounded px-1 py-[0.1rem] text-[0.5rem] font-semibold leading-3 tracking-wider text-white">
              NEW
            </div>
          </li>
        </ul>
      </div> */}

          {/* contact us  */}
          <div>
            <h6 className="mb-4 whitespace-nowrap uppercase">Contact Us</h6>

            <ul className="flex flex-col gap-2 text-zinc-500">
              <li className="max-w-max">
                <a
                  href="mailto:{store?.email || store?.websiteEmail}"
                  className="block"
                >
                  <h6 className="mb-0.5 flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      ></path>
                    </svg>

                    <span>Email</span>
                  </h6>

                  <p>testemail@gmail</p>
                </a>
              </li>

              <li className="max-w-max">
                <a href="tel:+{store?.phone}" className="block">
                  <h6 className="mb-0.5 flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      ></path>
                    </svg>

                    <span>Phone</span>
                  </h6>

                  <p>+91 123456789</p>
                </a>
              </li>

              <li className="max-w-max">
                <h6 className="mb-0.5 flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>

                  <span>Guaranteed Response Time</span>
                </h6>

                <p>12 hours</p>
              </li>

              <li className="max-w-max">
                <h6 className="mb-0.5 flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>

                  <span>Working Days/Hours</span>
                </h6>

                <p>10AM - 10PM</p>
              </li>
            </ul>
          </div>

          {/* Experience app */}
          <div>
            <h6 className="mb-4 whitespace-nowrap uppercase">
              Experience our app on mobile
            </h6>

            <div className="flex items-center gap-1">
              <a
                href="https://"
                aria-label="Click for the app link on Google Play"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={"/icons/google-play.png"}
                  alt=""
                  className="h-auto w-32 object-contain object-left"
                />
              </a>

              <a
                href="https://"
                aria-label="Click for the app link on App Store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={"/icons/app-store.svg"}
                  alt=""
                  className="h-auto w-32 object-contain object-left p-1"
                />
              </a>
            </div>
          </div>

          {/* keep in touch  */}

          <div>
            <h6 className="mb-4 whitespace-nowrap uppercase">Keep in touch</h6>

            <ul className="flex flex-wrap gap-4 text-zinc-500">
              {/* Facebook */}
              <li className="max-w-max">
                <a
                  href="{store?.socialSharingButtons?.facebook?.val}"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Click for facebook link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition duration-300 hover:text-[#4267B2]"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                  </svg>
                </a>
              </li>
              {/* Instagram */}
              <li className="max-w-max">
                <a
                  href="{store?.socialSharingButtons?.instagram?.val}"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Click for instagram link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition duration-300 hover:text-[#C13584]"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                    <circle cx="12" cy="12" r="3"></circle>
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
                  </svg>
                </a>
              </li>
              {/* Telegram */}
              <li className="max-w-max">
                <a
                  href="{store?.socialSharingButtons?.telegram?.val}"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Click for telegram link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition duration-300 hover:text-[#229ED9]"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
                  </svg>
                </a>
              </li>
              {/* Twitter */}
              <li className="max-w-max">
                <a
                  href="{store?.socialSharingButtons?.twitter?.val}"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Click for twitter link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition duration-300 hover:text-[#1DA1F2]"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
                  </svg>
                </a>
              </li>
              {/* Reddit */}
              <li className="max-w-max">
                <a
                  href="{store?.socialSharingButtons?.reddit?.val}"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Click for reddit link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition duration-300 hover:text-[#FF5700]"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z"></path>
                    <path d="M12 8l1 -5l6 1"></path>
                    <path d="M19 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                    <circle cx="9" cy="13" r=".5" fill="currentColor"></circle>
                    <circle cx="15" cy="13" r=".5" fill="currentColor"></circle>
                    <path d="M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5"></path>
                  </svg>
                </a>
              </li>
              {/* Linkedin */}
              <li className="max-w-max">
                <a
                  href="{store?.socialSharingButtons?.linkedin?.val}"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Click for linkedin link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition duration-300 hover:text-[#0077b5]"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                    <line x1="8" y1="11" x2="8" y2="16"></line>
                    <line x1="8" y1="8" x2="8" y2="8.01"></line>
                    <line x1="12" y1="16" x2="12" y2="11"></line>
                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                  </svg>
                </a>
              </li>
              {/* Pinterest */}
              <li className="max-w-max">
                <a
                  href="{store?.socialSharingButtons?.pinterest?.val}"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Click for pinterest link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition duration-300 hover:text-[#c8232c]"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="8" y1="20" x2="12" y2="11"></line>
                    <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7"></path>
                    <circle cx="12" cy="12" r="9"></circle>
                  </svg>
                </a>
              </li>
              {/* Youtube */}
              <li className="max-w-max">
                <a
                  href="{store?.socialSharingButtons?.youtube?.val}"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Click for youtube link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition duration-300 hover:text-[#FF0000]"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <rect x="3" y="5" width="18" height="14" rx="4"></rect>
                    <path d="M10 9l5 3l-5 3z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* popular searches */}
        <div className="mb-4 sm:mb-8">
          <div className="mb-4 flex items-center gap-4 font-semibold">
            <h6 className="flex-1 whitespace-nowrap uppercase">
              Popular searches
            </h6>

            <hr className="w-full border-t" />
          </div>

          <ul className="flex flex-wrap items-center text-muted-foreground">
            {Array.from({ length: 50 }).map((item, index) => (
              <li className="max-w-max" key={index}>
                <Link
                  href="/"
                  aria-label="Click for the products related to this field"
                  className="link-underline link-underline-gray capitalize"
                >
                  links {index + 1}
                </Link>

                {50 - 1 === index ? "" : <span className="px-2">|</span>}
              </li>
            ))}
          </ul>
        </div>

        {/* address */}
        <hr className="mb-4 w-full border-t sm:mb-8" />

        <div className="mb-4 sm:mb-8">
          <h6 className="mb-4 whitespace-nowrap uppercase">
            Registered Office Address
          </h6>

          <p>Nashik Maharashtra, India</p>
        </div>

        <hr className="mb-4 w-full border-t sm:mb-8" />

        <div className="flex flex-wrap items-center justify-between gap-5 md:justify-between">
          <p className="whitespace-nowrap">
            © asdfasdfasdf Powered by
            <a
              // href="{store?.saasDomain || 'https://litekart.in'}"
              href="#"
              rel="external"
              className="hover:underline"
              target="_blank"
            >
              asdfasdfasdf
            </a>
          </p>

          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
            {/* Contact Us */}

            <a
              href="/contact-us"
              aria-label="Click to visit this page"
              className="font-bold uppercase text-muted-foreground hover:text-muted-foreground/50"
            >
              Contact Us
            </a>

            {/* Faqs */}

            <a
              href="/faqs"
              aria-label="Click to visit this page"
              className="font-bold uppercase text-muted-foreground hover:text-muted-foreground/50"
            >
              Faqs
            </a>
          </div>
        </div>

        {/* <hr className="my-4 w-full border-t sm:mb-8" />

    <div className="prose max-w-none">
      <h6 className="mb-2">Dummy Section</h6>
      <p>
        This is some dummy content for demonstration purposes. You can
        replace this with actual content as needed.
      </p>
      <ul className="list-disc pl-5">
        <li>Dummy item 1</li>
        <li>Dummy item 2</li>
        <li>Dummy item 3</li>
      </ul>
    </div> */}
      </div>
    </footer>
  );
};

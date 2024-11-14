import { useEffect, useState } from "react";

type DeviceType = "Mobile" | "Tablet" | "Desktop";

export function useDeviceType() {
  const [device, setDevice] = useState<DeviceType>("Desktop");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    /**
     * Detects the device type (mobile, tablet, desktop) based on the
     * navigator.userAgent string and sets the device state accordingly.
     */
    const handleDeviceDetection = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /iphone|ipad|ipod|android|windows phone/g.test(
        userAgent
      );
      const isTablet =
        /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent);

      if (isMobile) setDevice("Mobile");
      else if (isTablet) setDevice("Tablet");
      else setDevice("Desktop");

      setLoading(false);
    };

    /* Detecting the device */
    handleDeviceDetection();

    /* listen for resize events  */
    window.addEventListener("resize", handleDeviceDetection);

    return () => {
      /* Cleanup the event listener */
      window.removeEventListener("resize", handleDeviceDetection);
    };
  }, []);

  return { device, loading };
}

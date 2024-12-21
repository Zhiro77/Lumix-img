import FeatureCarousel from "@/components/shared/FeatureCarousel";
import LumixButton from "@/components/elements/Lumix";
import IconButton from "@/components/elements/IconButton";

export default function Home() {
  return (
      <div className="">
          <div className="w-full flex items-center justify-center">
              <LumixButton/>
          </div>
          <FeatureCarousel/>
          <div className="w-full flex gap-2 items-center flex-wrap">
              <IconButton
                  icon="/icons/rainbow.svg"
                  text="Generate an Image"
              />
              <IconButton
                  icon="/icons/colorize.svg"
                  text="Colorize an old photo"
              />
              <IconButton
                  icon="/icons/starBlue.svg"
                  text="Rebove BG"
              />
              <IconButton
                  icon="/icons/enhance.svg"
                  text="Rebove BG"
              />
          </div>
      </div>
  );
}

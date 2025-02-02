import { FC } from "react";
import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

const components: JSXMapSerializer = {
  heading2: ({children}) =>(
    <Heading as="h2" size="md" className="text-center mb-12">{children}</Heading>
  ),
  heading3: ({children}) =>(
    <Heading as="h3" size="sm" className="mb-3 font-medium sm:text-left text-center">{children}</Heading>
  ),
  paragraph: ({children}) => (
    <p className="text-base font-medium font-body text-slate-600 sm:text-left text-center">{children}</p>
  )
}

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features: FC<FeaturesProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} components={components}/>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 max-5xl gap-x-8 gap-y-12 mx-auto sm:place-items-start place-items-center">
        {slice.primary.feature.map((item, index) => {
          return (
            <div key={index} className="max-w-sm grid sm:place-items-start place-items-center">
              { item.icon && <div className="mb-5">{icons[item.icon]}</div>}
              <PrismicRichText components={components} field={item.title} />
              <PrismicRichText components={components} field={item.description} />
            </div>
          )
        })}
      </div>
    </Bounded>
  );
};

export default Features;


function CalendarIcon(){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="71" fill="none">
      <path
        stroke="#0891B2"
        strokeWidth="5"
        d="M2.7 35c0-12.6 0-18.9 3.9-22.8s10.2-3.9 22.7-3.9h13.4c12.5 0 18.8 0 22.7 4 4 3.8 4 10.1 4 22.7v6.7c0 12.5 0 18.8-4 22.7-3.9 4-10.2 4-22.7 4H29.3c-12.5 0-18.8 0-22.7-4-4-3.9-4-10.2-4-22.7V35Z"
      ></path>
      <path
        stroke="#0891B2"
        strokeLinecap="round"
        strokeOpacity="0.5"
        strokeWidth="5"
        d="M19.3 8.3v-5m33.4 5v-5M4.3 25h63.4"
      ></path>
      <path
        fill="#0891B2"
        d="M56 51.7a3.3 3.3 0 1 1-6.7 0 3.3 3.3 0 0 1 6.7 0m0-13.4a3.3 3.3 0 1 1-6.7 0 3.3 3.3 0 0 1 6.7 0M39.3 51.7a3.3 3.3 0 1 1-6.6 0 3.3 3.3 0 0 1 6.6 0m0-13.4a3.3 3.3 0 1 1-6.6 0 3.3 3.3 0 0 1 6.6 0M22.7 51.7a3.3 3.3 0 1 1-6.7 0 3.3 3.3 0 0 1 6.7 0m0-13.4a3.3 3.3 0 1 1-6.7 0 3.3 3.3 0 0 1 6.7 0"
      ></path>
    </svg>
  )
};

const BarGraph = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none">
    <g stroke="#0891B2" strokeWidth="5" clipPath="url(#a)">
      <path strokeLinecap="round" d="M73.3 73.3H6.7"></path>
      <path
        strokeOpacity="0.5"
        d="M70 73.3v-25a5 5 0 0 0-5-5H55a5 5 0 0 0-5 5v25"
      ></path>
      <path d="M50 73.3V16.7c0-4.7 0-7.1-1.5-8.6-1.4-1.4-3.8-1.4-8.5-1.4s-7 0-8.5 1.4C30 9.6 30 12 30 16.7v56.6"></path>
      <path
        strokeOpacity="0.5"
        d="M30 73.3V31.7a5 5 0 0 0-5-5H15a5 5 0 0 0-5 5v41.6"
      ></path>
    </g>
    <defs>
      <clipPath id="a">
        <rect width="80" height="80" fill="#fff" rx="16.6"></rect>
      </clipPath>
    </defs>
  </svg>
);

const CloverIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none">
    <g stroke="#0891B2" strokeWidth="5" clipPath="url(#a)">
      <path strokeOpacity="0.5" d="M26.7 26.7h26.6v26.6H26.7z"></path>
      <path d="M53.3 53.3h10a10 10 0 1 1-10 10zm-26.6 0h-10a10 10 0 1 0 10 10zm26.6-26.6h10a10 10 0 1 0-10-10zm-26.6 0h-10a10 10 0 1 1 10-10z"></path>
    </g>
    <defs>
      <clipPath id="a">
        <rect width="80" height="80" fill="#fff" rx="16.6"></rect>
      </clipPath>
    </defs>
  </svg>
);

const HourglassIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none">
    <g stroke="#0891B2" strokeWidth="5" clipPath="url(#a)">
      <path d="M49.9 30.2 40 40l-9.9-9.8C20.4 20.6 15.5 15.8 17 11.6l.4-1c2-4 9-4 22.7-4 13.8 0 20.7 0 22.7 4l.4 1c1.4 4.2-3.5 9-13.2 18.6Z"></path>
      <path
        strokeOpacity="0.5"
        d="M30.1 49.8 40 40l9.9 9.8c9.7 9.6 14.6 14.4 13.2 18.6l-.4 1c-2 4-9 4-22.7 4-13.8 0-20.7 0-22.7-4a7 7 0 0 1-.4-1c-1.4-4.2 3.5-9 13.2-18.6Z"
      ></path>
    </g>
    <defs>
      <clipPath id="a">
        <rect width="80" height="80" fill="#fff" rx="16.6"></rect>
      </clipPath>
    </defs>
  </svg>
);

const icons = {
  calendar: <CalendarIcon />,
  bargraph: <BarGraph />,
  clover: <CloverIcon />,
  hourglass: <HourglassIcon />
}
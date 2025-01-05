import { cn } from "@/lib/utils";
import React from "react";

const Platform = {
  youtube: "Youtube",
  instagram: "Instagram",
  linkedin: "Linked In",
  facebook: "Facebook",
} as const;

type CardProps = {
  platform: keyof typeof Platform;
};

const PlatformIcons = ({ platform }: { platform: keyof typeof Platform }) => {
  switch (platform) {
    case "instagram":
      return (
        <svg
          className="max-w-7 max-h-7 text-slate-700"
          viewBox="0 0 24 24"
          id="meteor-icon-kit__solid-instagram"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9962 0.0078125C8.73824 0.0078125 8.32971 0.021622 7.05019 0.080003C5.77333 0.138241 4.90129 0.341051 4.13824 0.637622C3.34938 0.944146 2.68038 1.35434 2.01343 2.02124C1.34652 2.68819 0.936333 3.35719 0.629809 4.14605C0.333238 4.9091 0.130429 5.78115 0.0721905 7.058C0.0138095 8.33753 0 8.74605 0 12.0041C0 15.262 0.0138095 15.6705 0.0721905 16.9501C0.130429 18.2269 0.333238 19.099 0.629809 19.862C0.936333 20.6509 1.34652 21.3199 2.01343 21.9868C2.68038 22.6537 3.34938 23.0639 4.13824 23.3705C4.90129 23.667 5.77333 23.8698 7.05019 23.9281C8.32971 23.9864 8.73824 24.0002 11.9962 24.0002C15.2542 24.0002 15.6627 23.9864 16.9422 23.9281C18.2191 23.8698 19.0911 23.667 19.8542 23.3705C20.643 23.0639 21.312 22.6537 21.979 21.9868C22.6459 21.3199 23.0561 20.6509 23.3627 19.862C23.6592 19.099 23.862 18.2269 23.9202 16.9501C23.9786 15.6705 23.9924 15.262 23.9924 12.0041C23.9924 8.74605 23.9786 8.33753 23.9202 7.058C23.862 5.78115 23.6592 4.9091 23.3627 4.14605C23.0561 3.35719 22.6459 2.68819 21.979 2.02124C21.312 1.35434 20.643 0.944146 19.8542 0.637622C19.0911 0.341051 18.2191 0.138241 16.9422 0.080003C15.6627 0.021622 15.2542 0.0078125 11.9962 0.0078125ZM7.99748 12.0041C7.99748 14.2125 9.78776 16.0028 11.9962 16.0028C14.2047 16.0028 15.995 14.2125 15.995 12.0041C15.995 9.79557 14.2047 8.00529 11.9962 8.00529C9.78776 8.00529 7.99748 9.79557 7.99748 12.0041ZM5.836 12.0041C5.836 8.60181 8.594 5.84381 11.9962 5.84381C15.3984 5.84381 18.1564 8.60181 18.1564 12.0041C18.1564 15.4062 15.3984 18.1642 11.9962 18.1642C8.594 18.1642 5.836 15.4062 5.836 12.0041ZM18.3998 7.03996C19.1949 7.03996 19.8394 6.39548 19.8394 5.60043C19.8394 4.80538 19.1949 4.16086 18.3998 4.16086C17.6048 4.16086 16.9603 4.80538 16.9603 5.60043C16.9603 6.39548 17.6048 7.03996 18.3998 7.03996Z"
            fill="currentColor"
          />
        </svg>
      );

    case "youtube":
      return (
        <svg
          className="max-w-8 max-h-8 text-slate-700"
          fill="currentColor"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>youtube</title>
          <path d="M12.932 20.459v-8.917l7.839 4.459zM30.368 8.735c-0.354-1.301-1.354-2.307-2.625-2.663l-0.027-0.006c-3.193-0.406-6.886-0.638-10.634-0.638-0.381 0-0.761 0.002-1.14 0.007l0.058-0.001c-0.322-0.004-0.701-0.007-1.082-0.007-3.748 0-7.443 0.232-11.070 0.681l0.434-0.044c-1.297 0.363-2.297 1.368-2.644 2.643l-0.006 0.026c-0.4 2.109-0.628 4.536-0.628 7.016 0 0.088 0 0.176 0.001 0.263l-0-0.014c-0 0.074-0.001 0.162-0.001 0.25 0 2.48 0.229 4.906 0.666 7.259l-0.038-0.244c0.354 1.301 1.354 2.307 2.625 2.663l0.027 0.006c3.193 0.406 6.886 0.638 10.634 0.638 0.38 0 0.76-0.002 1.14-0.007l-0.058 0.001c0.322 0.004 0.702 0.007 1.082 0.007 3.749 0 7.443-0.232 11.070-0.681l-0.434 0.044c1.298-0.362 2.298-1.368 2.646-2.643l0.006-0.026c0.399-2.109 0.627-4.536 0.627-7.015 0-0.088-0-0.176-0.001-0.263l0 0.013c0-0.074 0.001-0.162 0.001-0.25 0-2.48-0.229-4.906-0.666-7.259l0.038 0.244z"></path>
        </svg>
      );

    case "facebook":
      return (
        <svg
          className="max-w-9 max-h-9 text-slate-700"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z"
            fill="currentColor"
          />
        </svg>
      );

    case "linkedin":
      return (
        <svg
          className="max-w-9 max-h-9 text-slate-700"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z"
            fill="currentColor"
          />
        </svg>
      );
    default:
      break;
  }
};

const PlatformCard = ({ platform }: CardProps) => (
  <div className={cn("flex-1 border rounded-xl px-4 py-4")}>
    {/* <div className="flex-1 border rounded-xl px-4 py-4"> */}
    <div className="flex justify-between items-top">
      <div className="flex flex-col gap-1">
        <text className="font-metropolis-semibold text-xl leading-4">
          {Platform[platform]}
        </text>
        <text className="font-metropolis-medium text-sm leading-4 text-gray-400">
          102,000 Average views
        </text>
      </div>
      <PlatformIcons platform={platform} />
    </div>
    <div className="flex gap-2.5 text-center mt-4 justify-between font-metropolis-medium">
      <div className="flex-1 bg-emerald-50 p-1 rounded-md gap-1 flex items-center justify-center">
        <svg
          className="h-5 w-5"
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.89608 1.95199C9.5533 1.98832 10.1695 2.28294 10.6105 2.77164C11.0514 3.26034 11.2813 3.90351 11.2501 4.56099C11.2501 6.09699 9.92408 7.04049 8.65158 8.17199C7.39558 9.29349 6.71908 9.90649 6.50008 10.048C6.26158 9.89349 5.42858 9.13649 4.34858 8.17199C3.07058 7.03599 1.75008 6.08349 1.75008 4.56099C1.71887 3.90351 1.94878 3.26034 2.38971 2.77164C2.83065 2.28294 3.44687 1.98832 4.10408 1.95199C4.46816 1.94095 4.82886 2.02458 5.15094 2.19469C5.47302 2.3648 5.74544 2.61557 5.94158 2.92249C6.36158 3.50999 6.43158 3.80399 6.50158 3.80399C6.57158 3.80399 6.64058 3.50999 7.05658 2.92099C7.25161 2.61265 7.52414 2.36088 7.84693 2.19084C8.16973 2.0208 8.53149 1.93844 8.89608 1.95199ZM8.89608 0.951986C8.44205 0.93745 7.99058 1.02553 7.57531 1.20966C7.16003 1.3938 6.79165 1.66924 6.49758 2.01549C6.20377 1.67025 5.83614 1.39544 5.42186 1.21136C5.00757 1.02728 4.55722 0.938643 4.10408 0.951986C3.18152 0.988062 2.31077 1.38798 1.68225 2.06428C1.05373 2.74059 0.71858 3.63825 0.750083 4.56099C0.750083 6.36599 2.02508 7.47449 3.25758 8.54599C3.39908 8.66899 3.54208 8.79299 3.68408 8.91949L4.19758 9.37849C4.7576 9.91137 5.34472 10.415 5.95658 10.8875C6.11847 10.9923 6.30722 11.0481 6.50008 11.0481C6.69295 11.0481 6.88169 10.9923 7.04358 10.8875C7.67493 10.4006 8.28011 9.88072 8.85658 9.32999L9.31758 8.91799C9.46408 8.78799 9.61258 8.65849 9.76008 8.53099C10.9271 7.51849 12.2501 6.37099 12.2501 4.56099C12.2816 3.63825 11.9464 2.74059 11.3179 2.06428C10.6894 1.38798 9.81865 0.988062 8.89608 0.951986Z"
            fill="currentColor"
          />
        </svg>
        <text>23.3k</text>
      </div>
      <div className="flex-1 bg-sky-100 gap-1 p-1 rounded-md flex items-center justify-center">
        <svg
          className="h-4 w-4"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.328 8.50406C10.9356 7.45311 11.1398 6.21692 10.9024 5.02642C10.6651 3.83592 10.0024 2.77254 9.03829 2.03495C8.07414 1.29735 6.87445 0.935985 5.66331 1.01836C4.45218 1.10073 3.31246 1.62121 2.45707 2.48256C1.60167 3.34391 1.08912 4.48722 1.01515 5.69889C0.941181 6.91057 1.31086 8.10773 2.05513 9.06673C2.7994 10.0257 3.86735 10.681 5.05947 10.9101C6.25158 11.1392 7.48633 10.9264 8.53304 10.3116L11 11.0001L10.328 8.50406Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
        <text>15.6k</text>
      </div>
      <div className="flex-1 bg-rose-100 gap-1 p-1 rounded-md flex items-center justify-center">
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
          <path d="m21.854 2.147-10.94 10.939" />
        </svg>
        <text>8.2k</text>
      </div>
    </div>
  </div>
  //   </div>
);

PlatformCard.displayName = "Instagram";

export default PlatformCard;

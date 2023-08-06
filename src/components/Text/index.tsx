import React from "react";

const sizeClasses = {
  txtSyneBold12: "font-bold font-syne",
  txtSyneBold36: "font-bold font-syne",
  txtSyneBold14: "font-bold font-syne",
  txtMontserratRomanMedium16WhiteA700: "font-medium font-montserrat",
  txtMontserratRomanRegular14Bluegray20001: "font-montserrat font-normal",
  txtMontserratRomanMedium1205: "font-medium font-montserrat",
  txtMontserratRomanRegular14: "font-montserrat font-normal",
  txtMontserratRomanRegular12: "font-montserrat font-normal",
  txtMontserratRomanMedium15: "font-medium font-montserrat",
  txtSyneSemiBold28: "font-semibold font-syne",
  txtMontserratRomanMedium16: "font-medium font-montserrat",
  txtMontserratRomanRegular1205: "font-montserrat font-normal",
  txtMontserratRomanSemiBold18: "font-montserrat font-semibold",
  txtMontserratRomanRegular16Bluegray20001: "font-montserrat font-normal",
  txtMontserratRomanSemiBold16: "font-montserrat font-semibold",
  txtSyneBold50: "font-bold font-syne",
  txtMontserratBold2431: "font-bold font-montserrat",
  txtSyneBold20: "font-bold font-syne",
  txtSyneBold48: "font-bold font-syne",
  txtSyneBold24: "font-bold font-syne",
  txtSyneBold48Black900: "font-bold font-syne",
  txtMontserratRomanMedium1356: "font-medium font-montserrat",
  txtInterRegular226: "font-inter font-normal",
  txtMontserratRomanRegular9: "font-montserrat font-normal",
  txtMontserratRomanRegular16: "font-montserrat font-normal",
  txtSyneSemiBold36: "font-semibold font-syne",
  txtInterMedium20: "font-inter font-medium",
  txtInterRegular16Bluegray30003: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtMontserratRomanSemiBold28: "font-montserrat font-semibold",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

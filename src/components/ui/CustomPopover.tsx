// import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";

import { Button } from "@nextui-org/button";
import { Popover, PopoverTrigger } from "@nextui-org/popover";
import { ReactNode } from "react";

type TProps = {
  title: ReactNode;
  children: ReactNode;
};

const CustomPopover = ({ title, children }: TProps) => {
  return (
    <Popover placement="top" color="foreground">
      <PopoverTrigger>
        <Button className="capitalize">{title}</Button>
      </PopoverTrigger>
      {children}
    </Popover>
  );
};

export default CustomPopover;

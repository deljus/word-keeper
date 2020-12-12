import { ReactComponentElement } from "react";

type ItemType = any;
type ItemsType = Array<ItemType>;

export interface ListProps {
    items?: ItemsType;
    renderItems?: (ItemType) => ReactComponentElement;
}

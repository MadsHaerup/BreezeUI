import React from 'react';
import { ImageProps, WidgetImage } from './widget-image';
import { ItemProps, WidgetItem } from './widget-item';
import { BoardProps, WidgetBoard } from './widget-board';

export interface WidgetProps {
	Image: React.FC<ImageProps>;
	Item: React.FC<ItemProps>;
	Board: React.FC<BoardProps>;
}

const Widget: WidgetProps = {
	Image: WidgetImage,
	Item: WidgetItem,
	Board: WidgetBoard,
};
export default Widget;

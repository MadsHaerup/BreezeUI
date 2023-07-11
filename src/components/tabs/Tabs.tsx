import React, { useContext, useState } from 'react';
import { getTabClassNames } from '../../helper/getTabClassNames';

type TabsContextType = {
	activeIndex: number;
	setActiveIndex: (index: number) => void;
	variant: 'enclosed' | 'rounded' | 'underlined' | null | 'undefined' | undefined;
};

const TabsContext = React.createContext<TabsContextType>({
	activeIndex: 0,
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setActiveIndex: () => {},
	variant: null,
});

export default TabsContext;

type TabsProps = {
	children: React.ReactNode;
	variant?: 'enclosed' | 'rounded' | 'underlined' | null | 'undefined' | undefined;
};

export const Tabs = ({ children, variant }: TabsProps) => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<TabsContext.Provider value={{ activeIndex, setActiveIndex, variant }}>
			<div className="w-full">{children}</div>
		</TabsContext.Provider>
	);
};

type TabListProps = {
	children: React.ReactNode;
};

export const TabList = ({ children }: TabListProps) => {
	const { activeIndex, setActiveIndex, variant } = useContext(TabsContext);
	return (
		<nav className="flex">
			{React.Children.map(children, (child, index) => {
				const tabClassNames = getTabClassNames(index, activeIndex, variant);

				return (
					<button onClick={() => setActiveIndex(index)} className={`${tabClassNames} `}>
						{(child as React.ReactElement).props.children}
					</button>
				);
			})}
		</nav>
	);
};

type TabProps = {
	children: React.ReactNode;
};

export const Tab = ({ children }: TabProps) => {
	return <>{children}</>;
};

type TabPanelProps = {
	children: React.ReactNode;
};

export const TabPanel = ({ children }: TabPanelProps) => {
	return <div>{children}</div>;
};

type TabPanelsProps = {
	children: React.ReactNode;
};

export const TabPanels = ({ children }: TabPanelsProps) => {
	const { activeIndex } = useContext(TabsContext);
	return (
		<>
			{React.Children.map(children, (child, index) => {
				return (
					<div className={`${activeIndex === index ? 'block' : 'hidden'} p-2`}>
						{(child as React.ReactElement).props.children}
					</div>
				);
			})}
		</>
	);
};

interface XSpacerProps {
	x: number;
	children: React.ReactNode;
}

const XSpacer = ({ x, children }: XSpacerProps) => {
	return <div className={`flex space-x-${x}`}>{children}</div>;
};

interface YSpacerProps {
	y: number;
	children: React.ReactNode;
}

const YSpacer = ({ y, children }: YSpacerProps) => {
	return (
		<div style={{ flexDirection: 'column' }} className={`flex flex-col space-y-${y}`}>
			{children}
		</div>
	);
};

interface SpacerProps {
	x?: number;
	y?: number;
	children: React.ReactNode;
}

const Spacer = ({ x, y, children }: SpacerProps) => {
	if (x) {
		return <XSpacer x={x}>{children}</XSpacer>;
	}
	if (y) {
		return <YSpacer y={y}>{children}</YSpacer>;
	}

	return null;
};

export default Spacer;

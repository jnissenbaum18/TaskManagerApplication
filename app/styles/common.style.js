import theme from './theme.style';

export const headingContainer = {
	flex: 1,
	flexDirection: 'row',
	justifyContent: 'center',
	paddingTop: theme.CONTAINER_PADDING
}

export const headingText = {
	fontSize: theme.FONT_SIZE_LARGE,
	alignSelf: 'flex-start',
	padding: 10,
	fontWeight: theme.FONT_WEIGHT_BOLD,
};

export const bodyContainer = {
	flex: 8,
	backgroundColor: '#e7cba4'
}

export const textInput = {
	padding: theme.TEXT_INPUT_PADDING,
	backgroundColor: 'white',
	borderWidth: 1,
	margin: 10,
	borderColor: theme.BORDER_COLOR_LIGHT,
	borderRadius: 2,
	alignSelf: 'stretch'
};
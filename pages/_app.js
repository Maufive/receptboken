import App, { Container } from "next/app";
import UserProvider, {
	UserConsumer
} from "../components/providers/UserProvider";
import Page from "../components/Page";
import MessageProvider, {
	MessageConsumer
} from "../components/providers/MessageProvider";

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}
		pageProps.query = ctx.query;
		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				<UserProvider>
					<UserConsumer>
						{({ setUser, user }) => (
							<MessageProvider>
								<MessageConsumer>
									{({ setMessage }) => (
										<Page>
											<Component
												user={user}
												setUser={setUser}
												setMessage={setMessage}
												{...pageProps}
											/>
										</Page>
									)}
								</MessageConsumer>
							</MessageProvider>
						)}
					</UserConsumer>
				</UserProvider>
			</Container>
		);
	}
}

export default MyApp;

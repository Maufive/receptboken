import App, { Container } from "next/app";
import UserProvider, {
	UserConsumer
} from "../components/providers/UserProvider";
import Page from "../components/Page";

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
							<Page>
								<Component user={user} setUser={setUser} {...pageProps} />
							</Page>
						)}
					</UserConsumer>
				</UserProvider>
			</Container>
		);
	}
}

export default MyApp;

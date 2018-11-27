import App, { Container } from "next/app";
import UserProvider from "../components/providers/UserProvider";
import { UserConsumer } from "../components/providers/UserProvider";
import Page from "../components/Page";

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				<Page>
					<UserProvider>
						<UserConsumer>
							{({ setUser }) => (
								<Component setUser={setUser} {...pageProps} />
							)}
						</UserConsumer>
					</UserProvider>
				</Page>
			</Container>
		);
	}
}

export default MyApp;

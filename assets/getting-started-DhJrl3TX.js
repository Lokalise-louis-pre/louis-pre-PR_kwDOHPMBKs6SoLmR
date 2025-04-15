import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as o}from"./index-s_7BDCjm.js";import"./index-C5WFQ8lX.js";import{M as r}from"./index-BIgXiRPh.js";import"./index-yBjzXJbu.js";import"./index-DubqEmGm.js";import"./preview-BxeMi2Ss.js";import"./iframe-nrFi4MSj.js";import"./DocsRenderer-CFRXHY34-DBHidBs8.js";import"./react-18-BfgGLNg9.js";import"./index-CJ88nXQk.js";import"./index-CD8QLViS.js";import"./index-CFeRKNTJ.js";import"./index-DrFu-skq.js";function s(n){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Overview/Getting Started",parameters:{viewMode:"docs",previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsx(t.h1,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(t.p,{children:"Louis design system is a collection of packages designed to streamline your development process and enhance the user experience, by providing a set of components, styles and guidance for building applications in React."}),`
`,e.jsxs(t.p,{children:["Louis is a fully featured React component library. Simple components can be composed to construct robust frontend applications. To best see this in action, we recommend studying our example repository created over here: ",e.jsx(t.a,{href:"https://github.com/lokalise/louis-demo-cra",rel:"nofollow",children:"louis-demo-cra"}),". In that repo we demonstrate typical usage of a number of different Louis components working together to create a multi input form."]}),`
`,e.jsx(t.h2,{id:"prerequisites",children:"Prerequisites"}),`
`,e.jsx(t.p,{children:"Ensure your project is configured with Vite's native CSS processing capabilities, which automatically handle the importing and bundling of CSS files without requiring manual setup of additional loaders. Unlike Webpack's approach, Vite streamlines this process while maintaining full support for CSS modules, preprocessors, and other styling features you may need."}),`
`,e.jsx(t.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(t.p,{children:"To use Louis in your project, run the following command in your terminal:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-shell",children:`npm i @lokalise/louis
`})}),`
`,e.jsxs(t.p,{children:["After installing Louis, you need to set up a ",e.jsx(t.code,{children:"ThemeProvider"})," at the root of your application:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { ThemeProvider, themes } from '@lokalise/louis';

const App = () => (
	<ThemeProvider theme={themes.light}>
		<TheRestOfYourApplication />
	</ThemeProvider>
);
`})}),`
`,e.jsx(t.p,{children:"From here on out, you can import and use Louis components anywhere:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { Button } from '@lokalise/louis';
import { useState } from 'react';

export const MyCounter = () => {
	const [count, setCount] = useState(0);
	return (
		<>
			<p>{\`You've clicked the button \${count} times!\`}</p>
			<Button variant="primary" onClick={() => setCount(count + 1)}>
				Click to increase the counter
			</Button>
		</>
	);
};
`})}),`
`,e.jsx(t.h2,{id:"working-with-an-api",children:"Working with an API"}),`
`,e.jsxs(t.p,{children:["If you are creating your own application with Louis, it remains up to you how you handle API interaction. It is not Louis' responsibility to dictate how you achieve this. Generally speaking Louis components expect to receive any data ",e.jsx(t.em,{children:"synchronously"}),". So let's demonstrate how we can achieve this when waiting for some ",e.jsx(t.em,{children:"asynchronous"})," API interactions to complete."]}),`
`,e.jsx(t.p,{children:"For this demonstration we'll abstract away the specifics of how the API is implemented. Let's suppose however that we have the following functions provided by our API layer:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`/**
 * Given a user ID, return a promise which resolves to the User object having that ID.
 */
const getUserDetails = (userId: string): Promise<User> => {
	// This guide is API implementation agnostic
};

/**
 * Given a User object, post it to the API.
 * The returned promise resolves when the backend confirms the post is complete.
 */
const postUserDetails = (user: User): Promise<void> => {
	// This guide is API implementation agnostic
};
`})}),`
`,e.jsx(t.p,{children:"Then how might we interact with these functions in our UI?"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { Flex, Input, Label, Loading } from '@lokalise/louis';
import { useCallback, useEffect, useState } from 'react';

import { getUserDetails, postUserDetails } from '../api';

/**
 * useUserDetails handles state and behaviour for our form.
 * This helps to separate behaviour from rendering.
 */
const useUserDetails = (userId: string) => {
	const [user, setUser] = useState({ name: '', email: '' });

	// We'll use this state to keep track of in progress API calls.
	const [loading, setLoading] = useState(false);

	// This useEffect manages retrieving user information from the API.
	// It starts as soon as this component mounts, or any time the userId changes.
	useEffect(() => {
		setLoading(true);
		getUserDetails(userId)
			.then((userFromBackend) => {
				setUser(userFromBackend);
			})
			.finally(() => setLoading(false));
	}, [userId]);

	// This function handles form submission.
	// We immediately update our local state to recognise an async process has started.
	// We clear the loading state only after the API call resolves.
	const submitUserDetails = () => {
		setLoading(true);
		postUserDetails(user).finally(() => setLoading(false));
	};

	const onChangeEmail = useCallback<ChangeEventHandler<HTMLInputElement>>(
		(e) => setUser((u) => ({ ...u, email: e.currentTarget.value })),
		[],
	);
	const onChangeName = useCallback<ChangeEventHandler<HTMLInputElement>>(
		(e) => setUser((u) => ({ ...u, name: e.currentTarget.value })),
		[],
	);

	return {
		loading,
		onChangeEmail,
		onChangeName,
		submitUserDetails,
		user,
	};
};

type UserDetailsUpdateFormProps = {
	userId: string;
};

const UserDetailsUpdateForm = ({ userId }: UserDetailsUpdateFormProps) => {
	const {
		loading,
		onChangeEmail,
		onChangeName,
		submitUserDetails,
		user: { email, name },
	} = useUserDetails(userId);

	// We have an in flight API call, and should wait for it to resolve
	if (loading) {
		return <Loading />;
	}

	// We have loaded user details from the backend.
	// The user can edit them synchronously as much as they like until they are ready to submit the form.
	return (
		<form onSubmit={submitUserDetails}>
			<Flex direction="column" gap={4}>
				<Label text="Full name" underline>
					<Input name="fullName" value={name} onChange={onChangeName} />
				</Label>
				<Label text="E-mail" underline>
					<Input
						name="email"
						type="email"
						value={email}
						onChange={onChangeEmail}
						placeholder="someone@example.com"
					/>
				</Label>
			</Flex>
		</form>
	);
};
`})}),`
`,e.jsx(t.p,{children:"This pattern of blocking entirely on form submission might not be acceptable if the API is particularly slow. In such cases we recommend using the Toast component. Here's how you would change the form submission handler above, if you wanted to use the Toast approach instead:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const submitUserDetails = () => {
	showToast({
		type: 'info',
		title: 'Initiated user details upload. This will take just a moment.',
	});
	postUserDetails({
		name: userName,
		email: userEmail,
	})
		.then(() =>
			showToast({
				type: 'success',
				title: 'User details uploaded successfully!',
			}),
		)
		.catch(() => {
			showToast({
				type: 'error',
				title: 'User details upload failed unexpectedly. Please try again.',
			});
		});
};
`})}),`
`,e.jsx(t.h2,{id:"testing",children:"Testing"}),`
`,e.jsxs(t.p,{children:["When testing components we need to wrap our component with a ",e.jsx(t.code,{children:"ThemeProvider"}),":"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { ThemeProvider, themes } from '@lokalise/louis';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { MyCounter } from './';

describe('<MyCounter />', () => {
	test('Increases the counter when clicked', async () => {
		const user = userEvent.setup();

		render(
			<ThemeProvider theme={themes.light}>
				<MyCounter />
			</ThemeProvider>,
		);

		expect(screen.getByText("You've clicked the button 0 times!")).toBeInTheDocument();

		await user.click(screen.getByRole('button', { name: 'Count' }));

		expect(screen.getByText("You've clicked the button 1 times!")).toBeInTheDocument();
	});
});
`})}),`
`,e.jsx(t.p,{children:"If this becomes tedious you can create your own custom render utility:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { type RenderOptions, render } from '@testing-library/react';
import { type ReactElement } from 'react';

const Providers = ({ children }: { children: React.ReactNode }) => (
	<ThemeProvider theme={themes.light}>{children}</ThemeProvider>
);

const customRender = (ui: ReactElement, options: RenderOptions = {}) => render(ui, { wrapper: Providers, ...options });

export { customRender as render };
`})})]})}function w(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{w as default};

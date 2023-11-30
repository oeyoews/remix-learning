import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div className="font-sans underline">
      <h1 className="underline">Welcome to Remix</h1>
      <p>test</p>
    </div>
  );
}

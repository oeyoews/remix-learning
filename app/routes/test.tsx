import { type MetaFunction } from '@remix-run/node';
import { Links } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [{ title: 'hi' }];
};

export default function test() {
  return (
    <div className="min-h-screen">
      <Links></Links>
    </div>
  );
}

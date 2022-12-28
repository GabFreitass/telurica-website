import Header from 'components/Header/Header';

interface RootProps {
  page: JSX.Element;
}

export default function Root({ page }: RootProps) {
  return (
    <>
      <Header />
      {page}
    </>
  );
}

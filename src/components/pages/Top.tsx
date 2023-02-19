import { InputMenu } from 'src/components/molecules';
import { Footer, Header } from 'src/components/organisms';

export const Top = () => {
  return (
    <>
      <Header />
      <div className="mx-40">
        <InputMenu />
      </div>
      <Footer />
    </>
  );
};

import { ColumnMenu } from 'src/components/molecules';
import { Footer, Header } from 'src/components/organisms';

export const Column = () => {
  return (
    <>
      <Header />

      <div className="w-[960px] mx-auto mt-20 mb-16">
        <div className="mb-16">
          <ColumnMenu />
        </div>
      </div>
      
      <Footer />
    </>
  );
};

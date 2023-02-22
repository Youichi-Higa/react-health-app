import { useEffect, useState } from 'react';
import { getColumns } from 'src/api';
import { PrimaryBtn, ScrollTopIcon } from 'src/components/atoms';
import { ColumnItem, ColumnMenu } from 'src/components/molecules';
import { Footer, Header } from 'src/components/organisms';
import type { Column } from 'src/types';

export const ColumnPage = () => {
  const [columns, setColumns] = useState<Column[]>();

  useEffect(() => {
    setColumns(getColumns());
  }, []);

  return (
    <>
      <Header />

      <div className="w-[960px] mx-auto mt-20 mb-16">
        {/* コラムメニュー */}
        <div className="mb-16">
          <ColumnMenu />
        </div>

        {/* コラムリスト */}
        <div className="flex flex-wrap gap-2 mb-6">
          {columns?.map((column) => {
            return (
              <ColumnItem
                key={column.id}
                text={column.text}
                createdAt={column.createdAt}
                img={column.img}
                tags={column.tags}
              />
            );
          })}
        </div>

        {/* ボタン */}
        <div className="w-[296px] h-16 mx-auto  mb-16">
          <PrimaryBtn text="コラムをもっと見る" />
        </div>
      </div>

      <ScrollTopIcon />

      <Footer />
    </>
  );
};

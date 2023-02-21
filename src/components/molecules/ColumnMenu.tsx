import { ColumnHeadline } from 'src/components/atoms';

export const ColumnMenu = () => {
  return (
    <div className="flex justify-between">
      <ColumnHeadline text="オススメ" />
      <ColumnHeadline text="ダイエット" />
      <ColumnHeadline text="美容" />
      <ColumnHeadline text="健康" />
    </div>
  );
};

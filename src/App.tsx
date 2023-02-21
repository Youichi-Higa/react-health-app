import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ColumnPage, MyRecord, Top } from 'src/components/pages';
import { urlPath } from 'src/constants';
import '@fontsource/noto-sans-jp';
import '@fontsource/inter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={urlPath.top} element={<Top />} />
          <Route path={urlPath.myRecord} element={<MyRecord />} />
          <Route path={urlPath.column} element={<ColumnPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

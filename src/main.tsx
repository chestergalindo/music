
import { createRoot } from 'react-dom/client';
import './utils/style/index.css';
import './utils/style/App.css';
const container = document.getElementById('root');
const root = createRoot(container!);
import { App } from './storage/App'; 
root.render(<App />);

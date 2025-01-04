declare var process: { env: { NODE_ENV: string } };
declare var window: any;
if (typeof process === 'undefined') {
  window.process = { env: { NODE_ENV: 'production' } };
}
import Scorekeeper from './components/Scorekeeper';
export default Scorekeeper;

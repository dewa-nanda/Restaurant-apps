/* eslint-disable no-console */
import * as WorkboxWindow from 'workbox-window';
import { alertMaker } from './maker-element';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    alertMaker('warning', 'Oooppss!!!', 'Service Worker not supported in the browser');
    return;
  }

  const wb = new WorkboxWindow.Workbox('./sw.bundle.js');
  try {
    await wb.register();
    console.log('Service worker registered');
  } catch (error) {
    console.log('Failed to register service worker', error);
  }
};

export default swRegister;

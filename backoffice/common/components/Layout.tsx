import Head from 'next/head';
import { Navbar } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import styles from '../../styles/Layout.module.css';
import AuthenticationInfo from './AuthenticationInfo';
import { useRef, useState } from 'react';
import Sidebar from './Sidebar';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const [open, setOpen] = useState(false);
  const node = useRef();

  return (
    <>
      <Head>
        <title>Yas - Backoffice</title>
        <meta name="description" content="Yet another shop backoffice" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar collapseOnSelect bg="dark" variant="dark" className={styles.header}>
        {/* <div className="container-fluid"> */}
        <Navbar.Brand href="/" className="font-weight-black text-white">
          Yas - Backoffice
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <AuthenticationInfo />
          </Navbar.Text>
        </Navbar.Collapse>
        {/* </div> */}
      </Navbar>
      <div className="container-fluid">
        <Sidebar />
        <div id={styles.rightBody}>
          <main className="col-md-9 py-5 container-fluid" id={styles.main}>
            {children}
          </main>
          <footer className={styles.footer}>
            <a
              href="https://github.com/nashtech-garage/yas"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by {'Yas - 2022 '}
            </a>
          </footer>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Row, Col, Button, notification, Divider } from 'antd';
import { UsergroupAddOutlined } from '@ant-design/icons';

const openNotification = () => {
  notification.open({
    message: '🤲 Follow Me',
    description:
      'I am C/mm with the ID ChenPlus. You may know me from GitHub & Zhihu or other places. Yes, those are also me. If you like to know more about me, please search it.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ChenPlus</title>
        <link rel="icon" href="/faviocn_C.png" />
      </Head>
      <Row>
        <Col span={24}>&nbsp;</Col>
      </Row>
      <Image
        src="/faviocn_C.png"
        alt="Picture of the author"
        width={118}
        height={132}
      />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi! welcome to Personal Pages! 👋
        </h1>
        <br></br>
        <p className={styles.description}>
         🧙 Fun fact: old and ugly{' '}
          <code className={styles.code}></code>
        </p>
        <Button shape="round" value="large" icon={<UsergroupAddOutlined />} onClick={openNotification}>
          Follow me
        </Button>
        <div className={styles.grid}>
          <a href="https://blog.chenplus.com" className={styles.card}>
            <h3>✏ Blog &rarr;</h3>
            <p>My thoughts on books, Learn about me in my blog. </p>
          </a>

          <a href="https://github.com/OldChenGit" className={styles.card}>
            <h3>🐱 GitHub &rarr;</h3>
            <p>My GitHub,  A Programmer during the study.</p>
          </a>

          <a
            href="https://weibo.com/ChenChilde/"
            className={styles.card}
          >
            <h3>🐋 WeiBo &rarr;</h3>
            <p>A new world! @ChenChilde, Greet a friend from afar.</p>
          </a>

          <a
            href="https://cloud.chenplus.com"
            className={styles.card}
          >
            <h3>📁 NetDisk &rarr;</h3>
            <p>My file album music video in the Cloud</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p> ChenPlus.Com © 2020</p>
      </footer>
    </div >
    
  )
}


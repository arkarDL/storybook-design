import { Button, Input, Typography } from 'storybookui';
import styles from './index.module.css';

export default function Web() {
  return (
    <div className={styles.container}>
      <Typography role='h1' size="5xl" sx={{ marginBlock: '.5em' }}> Design System Demo</Typography>
      <Typography role='p'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Provident architecto maiores nesciunt, amet velit quae aliquid,
        illum aperiam dolorum quos sed neque eius consectetur, mollitia nam nulla
        enim minus libero debitis minima corporis! Ab magnam quaerat dolorem aliquid cum,
        odio tempore vitae praesentium facere quam, nobis commodi tenetur natus esse eveniet
        expedita ullam veritatis ratione libero voluptatum quod consectetur reprehenderit totam
        harum! Sapiente nobis eveniet debitis dolorum temporibus tenetur non ea,
        ipsa dolore repudiandae et quisquam. Unde fugiat voluptatum voluptatibus dignissimos soluta
        doloremque in corporis alias quam quod perferendis excepturi vitae nulla ullam,
        aspernatur tempore! Iusto natus maxime inventore repellat.
      </Typography>
      <Typography role='a' sx={{ marginBlock: "1em", display: 'block' }}>
        Link
      </Typography>
      <form action="" className={styles.form}>
        <Input label='Usernmae' name='username' placeholder="Username" />
        <Input label='Password' name='Password' placeholder='Password' />
        <div className={styles.hstack}>
          <Button label='Cancel' variant='secondary'></Button>
          <Button label='Submit' variant='primary'></Button>

        </div>

      </form>
    </div>
  );
}

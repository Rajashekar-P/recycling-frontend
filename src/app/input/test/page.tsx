"use client"
import Button from '@/components/input/button';
import NumberInput from '@/components/input/number';
import ProgressBar from '@/components/input/progress';
import Select, { SelectOption } from '@/components/input/select/Select';
import Switch from '@/components/input/switch';
import Text from '@/components/input/text';
import TextArea from '@/components/input/text-area';
import Modal from '@/components/modal';
import { useModalContext } from '@/context/modal/ModalContext';
import styles from '@/styles/home.module.scss'

export default function Test()
{
  let modalController = useModalContext();

  const openModal = () =>
  {
    modalController.open(<TestModal close={modalController.close} />);
  }

  let options: SelectOption[] = [
    { name: "Test", value: "value" },
    { name: "Test1", value: "value" },
    { name: "Test2", value: "value" },
    { name: "Test3", value: "value" },
  ]

  return (
    <>
      <main className={styles["content"]}>
        <h1>Hello World</h1>

        <form className={styles["form"]}>
          <Text label='Username' placeholder='Enter' callback={(e) => console.log(e)} settings={{ required: true }} />
          <Switch label='Test' callback={(e) => console.log(e)} settings={{ required: true }} />
          <ProgressBar label="Test" value={50} />
          <TextArea label='Test' callback={(e) => console.log(e)} />
          <Select label="Test" options={options} />
          <NumberInput label='Test'/>
          <div className={styles["buttons"]}>
            <Button>Primary</Button>
            <Button type={"success"} clickCallback={openModal}>Success</Button>
            <Button type={"warning"} clickCallback={openModal}>Warning</Button>
            <Button type={"error"} clickCallback={openModal}>Error</Button>
            <Button clickCallback={openModal} style={{
              background: "linear-gradient(90deg, rgba(234,76,26,1) 10%, rgba(252,143,62,1) 90%)",
            }}>
              Custom
            </Button>
          </div>
          <div className={styles["buttons"]}>
            <Button outline>Primary</Button>
            <Button outline type={"success"} clickCallback={openModal}>Success</Button>
            <Button outline type={"warning"} clickCallback={openModal}>Warning</Button>
            <Button outline type={"error"} clickCallback={openModal} settings={{ disabled: true }}>Error</Button>
          </div>
        </form>
      </main>
    </>
  );
}


type Props = {
  close: () => void
}

function TestModal({ close }: Props)
{
  return (
    <Modal settings={{ closeCallback: close }}>
      <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero deleniti, sapiente neque, possimus eaque ducimus praesentium maxime obcaecati recusandae fuga officiis molestiae, ullam est iste tenetur vitae voluptates cum iure.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aut ducimus, excepturi vitae magnam a assumenda saepe blanditiis velit quod laborum ratione accusamus odit ullam vero non debitis harum eaque!
        Eveniet possimus illum qui quis quisquam sunt temporibus delectus doloremque quam nemo beatae itaque excepturi error, at suscipit, in veniam! Excepturi, nobis inventore quasi ex delectus accusamus! Sint, sequi suscipit.
        Repudiandae, rem? Veniam, quo aliquid. Sit quam tempore cumque quis dolores, minus veniam praesentium placeat ipsa odio ea! Sequi repellendus eaque libero animi quidem soluta placeat similique nihil fugit ullam.
        Dolore ducimus aliquid maiores qui error quis quae, rem animi ad nesciunt eaque vitae perferendis suscipit quasi nostrum sint omnis quam autem earum laudantium alias numquam repellat ipsum. Nihil, consequatur.
        Perferendis iure quas et officia voluptates quae, exercitationem, id dolorem soluta necessitatibus laudantium cupiditate nisi, distinctio dolores? Repellendus, eos voluptas. Rem accusamus praesentium perspiciatis repudiandae. Ratione illo quod rem sunt.</p>
    </Modal>
  )
}

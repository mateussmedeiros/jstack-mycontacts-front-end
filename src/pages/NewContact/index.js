import Button from '../../components/Button';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';

export default function NewContact() {
  return (
    <>
      <PageHeader
        title="Novo Contato"
      />
      <Input placeholder="Nome" />

      <Select>
        <option value="instagram">Instagram</option>
      </Select>

      <Button type="button" disabled>Cadastrar</Button>
    </>
  );
}

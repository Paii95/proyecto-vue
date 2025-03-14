import * as yup from 'yup';

export const schema = yup.object({
  nombre: yup.string().required("El nombre es obligatorio"),
  email: yup.string().email('Correo electrónico inválido').required('El correo es obligatorio')
});

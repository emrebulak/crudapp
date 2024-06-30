import * as Yup from 'yup';

const schema = Yup.object().shape({
    todo: Yup.string().required('Bu alan zorunludur').min(3, 'En az 3 karakter olmalıdır').max(100, 'En fazla 100 karakter olmalıdır')
});

export default schema;
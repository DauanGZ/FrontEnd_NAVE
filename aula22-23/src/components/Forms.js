import apiPost from '../services/apiPost'
import { useForm } from 'react-hook-form';

export default function Forms (props) { /* FAZER: Validação dos dados do form que irão para a api! */
    
    const {register, handleSubmit, setValue} = useForm();

    const onSubmit = data => {
        apiPost(data);
        setValue('userId','');
        setValue('title','');
        setValue('body','');
    };

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Usuário</label> 
            <div>          
                <input name="userId" ref={register} />
            </div>

            <label>Título</label>    
            <div>      
                <input name="title" ref={register} />
            </div>

            <label>Descrição</label>
            <div>
                <input name="body" ref={register} />
            </div>
            
            <input type="submit" />
        </form>
    )

}
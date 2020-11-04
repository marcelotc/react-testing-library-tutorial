import Todo from './Todo';

import { fireEvent, render, waitFor } from '@testing-library/react';

describe('Test for todo components', () => {
    it('Should add new task when form has been submitted', async () => {
        //renderizar o componente
        const { getByTestId, getByText } = render(<Todo></Todo>);
        //buscar o input
        const fieldNode = await waitFor(
            () => getByTestId('form-field')
        ); 
        //digitar no input
        const newTask = 'testing';
        fireEvent.change(
            fieldNode, 
            { target: { value: newTask } });
        expect(fieldNode.value).toEqual(newTask);
        //buscar o botão
        const btnNode = await waitFor(() => getByTestId('form-btn'));
        //clicar no botão
        fireEvent.click(btnNode);
        //buscar a tabela
        const tableNode = await waitFor(() => getByTestId('table'));
        //verificar se a tarefa foi adicionada na 
        console.log(tableNode.innerHTML);
        const tdNode = await waitFor(
            () => getByText(newTask)
        )
        expect(tdNode).toBeDefined()
    })
}) 
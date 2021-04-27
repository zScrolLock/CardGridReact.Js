import produtos from '../../data/produtos'
import '../layout/Product.css'

export default (props) => {
    const productList = produtos.map(produto => {
        return (
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price $</th>
                </tr>
                <tr>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$: {produto.preco.toFixed(2).replace('.',',')}</td>
                </tr>
            </tbody>
        );
    })

    return (
        <div>
            <table>
                {productList}
            </table>
        </div>
    )
}
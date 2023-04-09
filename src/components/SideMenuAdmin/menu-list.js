import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import paths from '../../constants/paths';

const listLinks = [
  {
    id: 1,
    label: 'Pedidos',
    link: paths.Orders,
    icon: ShoppingBagIcon,
  },
  {
    id: 2,
    label: 'Listar Produtos',
    link: paths.Products,
    icon: ShoppingCartIcon,
  },
  {
    id: 3,
    label: 'Novo Produto',
    link: paths.NewProduct,
    icon: AddIcon,
  },
];

export default listLinks;

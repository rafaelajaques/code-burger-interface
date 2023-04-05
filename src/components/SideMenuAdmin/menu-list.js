import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
];

export default listLinks;

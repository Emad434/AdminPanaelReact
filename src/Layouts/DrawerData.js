import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ViewListIcon from '@mui/icons-material/ViewList';
import PaymentsIcon from '@mui/icons-material/Payments';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InfoIcon from '@mui/icons-material/Info';
import LockResetIcon from '@mui/icons-material/LockReset';
import PhoneIcon from '@mui/icons-material/Phone';
import BadgeIcon from '@mui/icons-material/Badge';
import GppGoodIcon from '@mui/icons-material/GppGood';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ReorderIcon from '@mui/icons-material/Reorder';
const HomeData = [
    {
        title: 'Dashboard',
        route: 'home',
        icon: DashboardIcon
    },
    {
        title: 'Product',
        route: 'product',
        icon: ShoppingCartIcon
    },
    {
        title: 'BulkProduct',
        route: 'bulkproduct',
        icon: AddShoppingCartIcon
    },
    {
        title: 'BulkOrders',
        route: 'bulkorder',
        icon: ReorderIcon
    },
    {
        title: 'Orders',
        route: 'order',
        icon: ViewListIcon
    },
    {
        title: 'Transactions',
        route: 'transaction',
        icon: PaymentsIcon
    },
    {
        title: 'Wallet',
        route: 'wallet',
        icon: AccountBalanceWalletIcon
    },
    {
        title: 'Withdraw Approval',
        route: 'withdraw-approval',
        icon: AttachMoneyIcon
    },
    {
        title: 'Drop Off Location',
        route: 'drop-off-location',
        icon: LocationOnIcon
    },
];

const SettingData = [
    {
        title: 'General',
        route: 'setting.general',
        icon: InfoIcon
    },
    {
        title: 'Mailzip Code',
        route: 'setting.mailzip-code',
        icon: LocationOnIcon,
    },
    {
        title: 'Phone Number',
        route: 'setting.phone-number',
        icon: PhoneIcon,
    },
    {
        title: 'Banks',
        route: 'setting.banks',
        icon: AccountBalanceIcon
    },
];

const SecurityData = [
    {
        title: 'Password',
        route: 'security.password',
        icon: LockResetIcon,
    },
    {
        title: 'ID Card',
        route: 'security.id-card',
        icon: BadgeIcon,
    },
    {
        title: 'Security Question',
        route: 'security-question',
        icon: GppGoodIcon,
    },
    {
        title: 'Phone Number',
        route: 'security.phone-number',
        icon: PhoneIcon,
    },
];


export { HomeData, SettingData, SecurityData };

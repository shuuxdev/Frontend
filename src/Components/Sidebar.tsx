// import * as SidebarStyle from '../Styles/Sidebar';
import Container, { Wrapper } from '../Styles/Container'
import { a } from '../Helper/Testing'
import { Link } from 'react-router-dom';
import { FaBookMedical, FaSearch, FaCircle } from 'react-icons/fa'
import { BsChevronRight } from 'react-icons/bs'
import { IconFrame, TextFrame } from '../Styles/Frames'
import Avatar from '../avatar.jpg'
import { Box, Brand, Dropdown, DropdownItem, Header, Item, SearchContainer, SearchField, SidebarContainer, UserInfo, Username, UserPicture, UserRole, UserStatus } from '../Styles/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Reducers/allReducer';
import signIn from '../Actions/signIn'

const Sidebar: React.FC = (props) => {
    // const authorize = useSelector((state: RootState) => state.authorizeReducer)
    // const dispatch = useDispatch()
    // dispatch(signIn({ username: "shuu", password: 123 }))
    return (
        <SidebarContainer>
            <Wrapper padding="5px">
                <Brand >
                    <Link to="/danh-muc">NTSOFT</Link>
                </Brand>
                <ThongTinTaiKhoan tenNguoiDung="Shuu" role="Administrator" trangThai="Online" />
                <SearchContainer>
                    <SearchField placeholder="Tìm kiếm">
                    </SearchField>
                    <IconFrame height="35px" width="35px" mergeRadius={true}>
                        <FaSearch></FaSearch>
                    </IconFrame>
                </SearchContainer>
                <DanhSachDanhMuc />
            </Wrapper>
        </SidebarContainer>
    );
}

const ThongTinTaiKhoan: React.FC<{ tenNguoiDung: string, role: string, trangThai: string }> = ({ tenNguoiDung, role, trangThai }) => {
    return (
        <Header>
            <UserPicture>
                <img src={Avatar} alt="" />
            </UserPicture>
            <UserInfo>
                <Username>{tenNguoiDung}</Username>
                <UserRole>{role}</UserRole>
                <UserStatus>
                    <FaCircle></FaCircle>
                    {trangThai}
                </UserStatus>
            </UserInfo>
        </Header>
    )
}

//Phần danh mục bắt đầu từ đây

const DanhSachDanhMuc: React.FC = () => {
    return (
        <Box>
            <DanhMucItem tenDanhMuc="Quản lý" danhSachDanhMucCon={[{ tenDanhMuc: "Bán hàng", link: "/danh-muc/ban-hang" }, { tenDanhMuc: "Chưa thêm", link: "/emptyPage" }, { tenDanhMuc: "Chưa thêm", link: "/emptyPage" }]} />
            <DanhMucItem tenDanhMuc="Danh mục 2" danhSachDanhMucCon={[{ tenDanhMuc: "Chưa thêm", link: "/emptyPage" }, { tenDanhMuc: "Chưa thêm", link: "/emptyPage" }, { tenDanhMuc: "Chưa thêm", link: "/emptyPage" }]} />
            <DanhMucItem tenDanhMuc="Danh mục 2" danhSachDanhMucCon={[{ tenDanhMuc: "Chưa thêm", link: "/emptyPage" }, { tenDanhMuc: "Chưa thêm", link: "/emptyPage" }, { tenDanhMuc: "Chưa thêm", link: "/emptyPage" }]} />
        </Box>
    )
}




interface IDanhMuc {
    tenDanhMuc: string;
    danhSachDanhMucCon: IDanhMucCon[];
}
interface IDanhMucCon {
    tenDanhMuc: string;
    link: string;
}
const DanhMucItem: React.FC<IDanhMuc> = ({ tenDanhMuc, danhSachDanhMucCon }) => {
    return (
        <Item>
            <DanhMucCha tenDanhMuc={tenDanhMuc} />
            <Dropdown>
                {danhSachDanhMucCon.map((danhMucCon) => (
                    <DanhMucCon tenDanhMuc={danhMucCon.tenDanhMuc} link={danhMucCon.link} />
                ))}
            </Dropdown>
        </Item>
    )
}
const DanhMucCha: React.FC<{ tenDanhMuc: string }> = ({ tenDanhMuc }) => {
    return (
        <TextFrame>
            <span>{tenDanhMuc}</span>
            <IconFrame height="20px" width="20px" location="rightSide">
                <BsChevronRight></BsChevronRight>
            </IconFrame>
        </TextFrame>
    )
}
const DanhMucCon: React.FC<IDanhMucCon> = ({ tenDanhMuc, link }) => {
    return (
        <DropdownItem>
            <IconFrame>
                <FaBookMedical></FaBookMedical>
            </IconFrame>
            <Link to={link}>{tenDanhMuc}</Link>
        </DropdownItem>

    )
}
export default Sidebar;
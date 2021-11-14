import React, { useState, useEffect, useRef, useReducer } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { Dropdown } from 'primereact/dropdown';
import '../SCSS/DanhMucSanPham.scss'
import { Wrapper } from '../Styles/Container'

const DanhMucSanPham: React.FC = () => {

    interface ISanPham {
        id: number,
        maSanPham: string,
        tenSanPham: string,
        giaSanPham: number,
        danhMucId: number,
        danhGia: any,
        trangThai: string,
        soLuong: number,
    }

    let emptyProduct: ISanPham = {
        id: 0,
        maSanPham: "",
        tenSanPham: "",
        giaSanPham: 0,
        soLuong: 0,
        danhGia: 0,
        trangThai: "",
        danhMucId: 0
    };
    let trangThaiOption = [
        { name: "Còn hàng", value: "Còn hàng" },
        { name: "Hết hàng", value: "Hết hàng" }
    ]
    //Danh sách product lấy từ server
    const [products, setProducts] = useState(new Array<ISanPham>());
    //khi người dùng edit sản phẩm thì product là sản phẩm đó
    const [product, setProduct] = useState(emptyProduct);
    //Khi người dùng click chọn vào dòng nào thì selectedProduct là dòng đó
    const [selectedProduct, setSelectedProduct] = useState(null);
    //Hiển thị dialog khi người dùng edit sản phẩm
    const [dialog, setDialog] = useState(false);
    //State này dùng chủ yếu để kiểm tra người dùng có nhập đầy đủ thông tin khi edit sản phẩm chưa
    const [submitted, setSubmitted] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const toast: any = useRef(null);
    const [globalFilter, setGlobalFilter] = useState("");

    const editSanPham = (rowData: ISanPham) => {
        console.log(rowData);
        if (rowData.id) {
            setProduct(rowData);
            setDialog(true);
        }
    }
    const findIndexById = (id: number) => {
        let index = -1;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    }
    const taoSanPhamMoi = () => {
        setSubmitted(false);
        setProduct(emptyProduct);
        setDialog(true);
    }
    const saveSanPham = async () => {
        //Không nên set state trực tiếp, vì có thể gặp bug tiềm ẩn
        //https://daveceddia.com/why-not-modify-react-state-directly/
        setSubmitted(true)
        const requestOption = {
            method: "POST",
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify(product)
        }
        const _product = product;
        const _products = products;
        if (product.id) {
            const index = findIndexById(product.id);
            _products[index] = _product;
            const result = await fetch("/api/luuSanPham", requestOption).then(res => res.json())
            switch (result) {
                case "Ok":
                    toast.current.show({ severity: 'success', summary: 'Thành công', detail: 'Cập nhật sản phẩm thành công', life: 3000 });
                    setProducts(_products);
                    break;
                default:
                    toast.current.show({ severity: 'error', summary: 'Thất bại', detail: 'Cập nhật sản phẩm thất bại', life: 3000 });
                    break;

            }
        }
        else {
            const result = await fetch("/api/themSanPham", requestOption).then(res => res.json())
            switch (result) {
                case "error":
                    toast.current.show({ severity: 'error', summary: 'Thất bại', detail: 'Thêm sản phẩm thất bại', life: 3000 });
                    break;
                default:
                    toast.current.show({ severity: 'success', summary: 'Thành công', detail: 'Thêm sản phẩm thành công', life: 3000 });
                    _products.push({ ..._product, id: result });
                    setProducts(_products);
                    break;
            }
        }
        closeDialog();
    }
    const xoaSanPham = async () => {
        if (product.id) {
            const requestOption = {
                method: "DELETE",
            }
            const result = await fetch(`/api/xoaSanPham/?id=${product.id}`, requestOption)
            const _products = products.filter((prd) => prd.id !== product.id)
            setProducts(_products);
            setDeleteProductDialog(false);
            setProduct(emptyProduct);
            toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Xóa sản phẩm thành công', life: 3000 });
        }

    }
    const createId = () => {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for (let i = 0; i < 8; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }
    const closeDialog = () => {
        setDialog(false);
        setSubmitted(false);
    }
    //Phần template
    const header = (
        <div className="table-header">
            <h5 className="p-mx-0 p-my-1">Quản lí sản phẩm</h5>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter((e.target as HTMLInputElement).value)} placeholder="Search..." />
            </span>
        </div>
    );
    const confirmDeleteProduct = (product: ISanPham) => {
        setProduct(product);
        setDeleteProductDialog(true);
    }
    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    }
    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false);
    }
    const danhGiaTemplate = (rowData: ISanPham) => {
        return (
            <Rating value={rowData.danhGia} readOnly={true} cancel={false}></Rating>
        )
    }
    const thaoTacTemplate = (rowData: ISanPham) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button p-button-success p-mr-2" onClick={() => editSanPham(rowData)} />
                <Button icon="pi pi-trash" className="p-button p-button-warning" onClick={() => confirmDeleteProduct(rowData)} />
            </React.Fragment>
        )
    }
    const trangThaiTemplate = (rowData: ISanPham) => {

        if (!rowData.trangThai) {
            return;
        }
        const _serverity = (rowData.trangThai === "Còn hàng") ? "success" : "danger"
        return (
            <React.Fragment>
                <Badge value={rowData.trangThai} severity={_serverity} />
            </React.Fragment>
        )
    }
    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button label="Thêm mới" icon="pi pi-plus" className="p-button-success p-mr-2" onClick={taoSanPhamMoi} />
            </React.Fragment>
        )
    }
    const productDialogFooter = (
        <React.Fragment>
            <Button label="Hủy" icon="pi pi-times" className="p-button-text" onClick={closeDialog} />
            <Button label="Lưu" icon="pi pi-check" className="p-button-text" onClick={saveSanPham} />
        </React.Fragment>
    );
    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={xoaSanPham} />
        </React.Fragment>
    );
    const deleteProductsDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductsDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" />
        </React.Fragment>
    );
    useEffect(() => {
        fetch('https://localhost:5001/api/getAllSanPham').then(res => res.json()).then(d => setProducts(d));

    }, []);
    return (
        <div className="data-table">
            <Wrapper padding="15px">
                <Toast ref={toast} />
                <Toolbar className="p-mb-3" left={leftToolbarTemplate}></Toolbar>
                <DataTable key="id" value={products} header={header} selection={selectedProduct}
                    paginator rows={5} rowsPerPageOptions={[3, 5, 10, 25]}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    globalFilter={globalFilter}>
                    <Column field="maSanPham" sortable header="Mã sẩn phẩm"></Column>
                    <Column field="tenSanPham" sortable header="Tên sản phẩm"></Column>
                    <Column field="giaSanPham" sortable header="Giá"></Column>
                    <Column field="danhMucId" sortable header="Danh Mục"></Column>
                    <Column field="danhGia" sortable header="Đánh giá" body={danhGiaTemplate}></Column>
                    <Column field="trangThai" sortable header="Trạng Thái" body={trangThaiTemplate}></Column>
                    <Column field="soLuong" sortable header="Số Lượng"></Column>
                    <Column header="Thao tác" body={thaoTacTemplate}></Column>
                </DataTable>
                <Dialog visible={dialog} style={{ width: '450px' }} footer={productDialogFooter} header="Chi tiết sản phẩm" className="p-fluid" onHide={() => setDialog(false)}>
                    <div className="p-field">
                        <label htmlFor="code">Mã sản phẩm</label>
                        <InputText required autoFocus id="code" value={product.maSanPham} onChange={e => setProduct({ ...product, maSanPham: e.target.value })} />
                        {submitted && !product.maSanPham && <small className="p-error">Không được bỏ trống mã sản phẩm</small>}
                    </div>
                    <div className="p-field">
                        <label htmlFor="name">Tên sản phẩm</label>
                        <InputText id="name" value={product.tenSanPham} onChange={e => setProduct({ ...product, tenSanPham: e.target.value })} />
                        {submitted && !product.tenSanPham && <small className="p-error">Không được bỏ trống tên sản phẩm</small>}
                    </div>
                    <div className="p-field">
                        <label htmlFor="state"> Trạng thái</label>
                        <Dropdown id="state" value={product.trangThai} optionLabel="name" optionValue="value" options={trangThaiOption} onChange={e => setProduct({ ...product, trangThai: e.target.value })} />
                        {submitted && !product.trangThai && <small className="p-error">Không được bỏ trống trạng thái</small>}

                    </div>
                    <div className="p-field">
                        <label htmlFor="review">Đánh giá</label>
                        <Rating id="review" value={product.danhGia} onChange={(e) => { setProduct({ ...product, danhGia: e.target.value }) }} cancel={false} />

                    </div>



                    <div className="p-formgrid p-grid">
                        <div className="p-field p-col">
                            <label htmlFor="price">Giá</label>
                            <InputNumber id="price" value={product.giaSanPham} onChange={(e) => { setProduct({ ...product, giaSanPham: e.value }) }} />

                        </div>
                        <div className="p-field p-col">
                            <label htmlFor="quantity">Số Lượng</label>
                            <InputNumber id="quantity" value={product.soLuong} onChange={(e) => { setProduct({ ...product, soLuong: e.value }) }} />

                        </div>
                    </div>
                </Dialog>
                <Dialog visible={deleteProductDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                    <div className="confirmation-content">
                        <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem' }} />
                        {product && <span>Are you sure you want to delete <b>{product.tenSanPham}</b>?</span>}
                    </div>
                </Dialog>

                <Dialog visible={deleteProductsDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                    <div className="confirmation-content">
                        <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem' }} />
                        {product && <span>Are you sure you want to delete the selected products?</span>}
                    </div>
                </Dialog>
            </Wrapper>
        </div>
    )

}
export default DanhMucSanPham;
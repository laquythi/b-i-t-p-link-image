package communityuni.com.test;

import communityuni.com.model.NhanVienChinhThuc;
import communityuni.com.model.NhanVienThoiVu;

public class TestNhanVien {
    public static void main(String[] args) {
        NhanVienChinhThuc thi = new NhanVienChinhThuc(1,"la quy thi");
        thi.tinhLuong();

        NhanVienThoiVu tuan = new NhanVienThoiVu(2,"tuan bui");
        tuan.tinhLuong();
    }
}

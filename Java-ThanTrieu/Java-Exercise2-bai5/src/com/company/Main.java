package com.company;

import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {
        // write your code here
        // 5 : nhap 2 mang a[n], b[m] , 1 so p (0 <= p <= n)
        // hay chen mang b vao vi tri p cua a. vi du a[4,7,3,5] b[1,4,2,3] p = 2 => a[8] = {4,7,1,4,2,3,3,5};
        int[] a, b, c; // khai bao 2 mang a,b ban dau. mang c la mang cuoi cung
        int n, m, k, p; // m,n,k la so ptu cua 3 mang. p la vi tri chen
        Scanner sc = new Scanner(System.in);
        System.out.println("nhap m,n ");
        m = sc.nextInt();
        n = sc.nextInt();
        k = m + n;

        System.out.println("nhap mang a[] voi " + m + " phan tu");
        a = nhap(m);
        System.out.println("nhap mang b[] voi " + n + " phan tu");
        b = nhap(n);
        c = new int[k];
        System.out.println("nhap p : ");
        do {
            p = sc.nextInt();
        }while (p >= m || p < 0);
        // copy du lieu tu 2 mang vao mang dich
        for (int i = 0; i < p; i++) {
            c[i] = a[i];
        }
        // copy mang b vao mang c
        for (int i = 0; i < n; i++) {
            c[i+p] = b[i];
        }
        // copy phan con lai cua mang a vao mang c
        for (int i = p; i < m; i++) {
            c[i+n] = a[i];
        }


        System.out.println("mang a[] : " + Arrays.toString(a));
        System.out.println("mang b[] : " + Arrays.toString(b));
        System.out.println("mang c[] : " + Arrays.toString(c));
    }

    public static int[] nhap(int n) {
        int[] x = new int[n];
        for (int i = 0; i < n; i++) {
            x[i] = sc.nextInt();
        }
        return x;
    }
}
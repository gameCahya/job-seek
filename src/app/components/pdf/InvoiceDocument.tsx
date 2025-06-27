'use client';

import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Style PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 12,
    lineHeight: 1.5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2563eb', // biru
    marginBottom: 10,
  },
  section: {
    marginBottom: 20,
  },
  table: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20,
    border: '1px solid #2563eb',
  },
  tableRowHeader: {
    flexDirection: 'row',
    backgroundColor: '#2563eb',
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 6,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottom: '1px solid #eee',
    paddingVertical: 6,
  },
  tableCol: {
    flex: 1,
    textAlign: 'center',
  },
  tableColDesc: {
    flex: 2,
    textAlign: 'left',
    paddingLeft: 8,
  },
  totalText: {
    textAlign: 'right',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2563eb',
  },
  note: {
    marginTop: 20,
    fontSize: 10,
    color: 'gray',
  },
});

// Komponen Invoice
const InvoiceDocument = ({ data }: { data: any }) => {
  const akunTambahanCount = data.akun_tambahan?.length || 0;
  const akunTambahanHarga = 5000;
  const akunTambahanSubtotal = akunTambahanCount * akunTambahanHarga;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>INVOICE</Text>
          <Text>Invoice ID: {data.id}</Text>
          <Text>Date: {new Date().toLocaleDateString('id-ID')}</Text>
        </View>

        <View style={styles.section}>
          <Text>Issued to:</Text>
          <Text>{data.nama}</Text>
          <Text>{data.email}</Text>
          <Text>{data.whatsapp}</Text>
        </View>

        {/* Table Start */}
        <View style={styles.table}>
          <View style={styles.tableRowHeader}>
            <Text style={styles.tableCol}>No</Text>
            <Text style={styles.tableColDesc}>Description</Text>
            <Text style={styles.tableCol}>Qty</Text>
            <Text style={styles.tableCol}>Price</Text>
            <Text style={styles.tableCol}>Subtotal</Text>
          </View>

          {/* Paket */}
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>1</Text>
            <Text style={styles.tableColDesc}>{data.paket}</Text>
            <Text style={styles.tableCol}>1</Text>
            <Text style={styles.tableCol}>Rp{(data.tagihan - akunTambahanSubtotal).toLocaleString('id-ID')}</Text>
            <Text style={styles.tableCol}>Rp{(data.tagihan - akunTambahanSubtotal).toLocaleString('id-ID')}</Text>
          </View>

          {/* Tambahan Akun */}
          {akunTambahanCount > 0 && (
            <View style={styles.tableRow}>
              <Text style={styles.tableCol}>2</Text>
              <Text style={styles.tableColDesc}>
                Tambahan Akun ({akunTambahanCount} akun × Rp5.000)
              </Text>
              <Text style={styles.tableCol}>{akunTambahanCount}</Text>
              <Text style={styles.tableCol}>Rp5.000</Text>
              <Text style={styles.tableCol}>Rp{akunTambahanSubtotal.toLocaleString('id-ID')}</Text>
            </View>
          )}
        </View>
        {/* Table End */}

        {/* Total */}
        <View>
          <Text style={styles.totalText}>
            Grand Total: Rp{data.tagihan.toLocaleString('id-ID')}
          </Text>
        </View>

        {/* Note */}
        <View style={styles.note}>
          <Text>Note:</Text>
          <Text>Bank: BCA</Text>
          <Text>No Rekening: 1234567890</Text>
          <Text>a.n PT Job Seekers Indonesia</Text>
        </View>
      </Page>
    </Document>
  );
};

export default InvoiceDocument;

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package jgoogleadsense;

/**
 *
 * @author ANA RODRIGUEZ
 */
public class JPrincipal extends javax.swing.JFrame {

    MyClass c = new MyClass();
    
    /**
     * Creates new form JPrincipal
     */
    public JPrincipal() {
        setVisible(true);
        initComponents();
    }
    
    private void ConectarPostgreSQL()
    {
        int k = this.cmbPaginasFuentes.getSelectedIndex();
        String nombre = "ninguna";
        
        switch(k)
        {
            case 1:
                c.ConectarBD("localhost", "adsense_stackoverflow", "adsense", "adsense");
                nombre = "StackOverFlow";
                break;
        }
        
        this.lblEstadoConexion.setText("Conectado a " + nombre + " base de datos");
        
        CargarInformacion();
    }
    
    private void CargarInformacion()
    {
        c.LlenarTabla("select e.* from enlace e;", jTable1);
    }
    
    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        lblListadoPaginas = new javax.swing.JLabel();
        jScrollPane1 = new javax.swing.JScrollPane();
        jTable1 = new javax.swing.JTable();
        lblPaginasFuentes = new javax.swing.JLabel();
        cmbPaginasFuentes = new javax.swing.JComboBox();
        btnPublicar = new javax.swing.JButton();
        lblDesdePaginacion = new javax.swing.JLabel();
        jSpinner1 = new javax.swing.JSpinner();
        jSpinner2 = new javax.swing.JSpinner();
        lblCantidadPaginas = new javax.swing.JLabel();
        lblPaginasPublicadas = new javax.swing.JLabel();
        txtPaginasPublicadas = new javax.swing.JTextField();
        lblEstadoConexion = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        getContentPane().setLayout(null);

        lblListadoPaginas.setText("Listado de las p??ginas publicadas");
        getContentPane().add(lblListadoPaginas);
        lblListadoPaginas.setBounds(20, 110, 250, 15);

        jTable1.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {

            },
            new String [] {
                "ID_Enlace", "Pagina", "Enlace", "Tema", "Fecha", "Idioma", "Publicado"
            }
        ) {
            Class[] types = new Class [] {
                java.lang.Integer.class, java.lang.Integer.class, java.lang.String.class, java.lang.String.class, java.lang.String.class, java.lang.String.class, java.lang.Boolean.class
            };

            public Class getColumnClass(int columnIndex) {
                return types [columnIndex];
            }
        });
        jScrollPane1.setViewportView(jTable1);

        getContentPane().add(jScrollPane1);
        jScrollPane1.setBounds(10, 142, 1040, 360);

        lblPaginasFuentes.setText("P??ginas Fuentes:");
        getContentPane().add(lblPaginasFuentes);
        lblPaginasFuentes.setBounds(20, 20, 120, 15);

        cmbPaginasFuentes.setModel(new javax.swing.DefaultComboBoxModel(new String[] { "-- Seleccione una opcion --", "StackOverFlow" }));
        cmbPaginasFuentes.addItemListener(new java.awt.event.ItemListener() {
            public void itemStateChanged(java.awt.event.ItemEvent evt) {
                cmbPaginasFuentesItemStateChanged(evt);
            }
        });
        getContentPane().add(cmbPaginasFuentes);
        cmbPaginasFuentes.setBounds(150, 20, 340, 25);

        btnPublicar.setText("Publicar");
        getContentPane().add(btnPublicar);
        btnPublicar.setBounds(540, 70, 120, 27);

        lblDesdePaginacion.setText("A partir de la paginacion");
        getContentPane().add(lblDesdePaginacion);
        lblDesdePaginacion.setBounds(20, 70, 190, 15);

        jSpinner1.addChangeListener(new javax.swing.event.ChangeListener() {
            public void stateChanged(javax.swing.event.ChangeEvent evt) {
                jSpinner1StateChanged(evt);
            }
        });
        getContentPane().add(jSpinner1);
        jSpinner1.setBounds(190, 70, 80, 26);
        getContentPane().add(jSpinner2);
        jSpinner2.setBounds(440, 70, 80, 26);

        lblCantidadPaginas.setText("Cantidad de paginas");
        getContentPane().add(lblCantidadPaginas);
        lblCantidadPaginas.setBounds(290, 70, 150, 15);

        lblPaginasPublicadas.setText("Cantidad total de p??ginas publicadas");
        getContentPane().add(lblPaginasPublicadas);
        lblPaginasPublicadas.setBounds(10, 510, 260, 15);

        txtPaginasPublicadas.setEditable(false);
        txtPaginasPublicadas.setHorizontalAlignment(javax.swing.JTextField.CENTER);
        txtPaginasPublicadas.setText("0");
        getContentPane().add(txtPaginasPublicadas);
        txtPaginasPublicadas.setBounds(260, 510, 160, 25);

        lblEstadoConexion.setText("Conectado a ninguna base de datos");
        getContentPane().add(lblEstadoConexion);
        lblEstadoConexion.setBounds(510, 30, 540, 15);

        java.awt.Dimension screenSize = java.awt.Toolkit.getDefaultToolkit().getScreenSize();
        setBounds((screenSize.width-1083)/2, (screenSize.height-574)/2, 1083, 574);
    }// </editor-fold>//GEN-END:initComponents

    private void jSpinner1StateChanged(javax.swing.event.ChangeEvent evt) {//GEN-FIRST:event_jSpinner1StateChanged
        // TODO add your handling code here:
        //System.out.println(this.jSpinner1.getValue());
    }//GEN-LAST:event_jSpinner1StateChanged

    private void cmbPaginasFuentesItemStateChanged(java.awt.event.ItemEvent evt) {//GEN-FIRST:event_cmbPaginasFuentesItemStateChanged
        // TODO add your handling code here:
        this.ConectarPostgreSQL();
    }//GEN-LAST:event_cmbPaginasFuentesItemStateChanged

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton btnPublicar;
    private javax.swing.JComboBox cmbPaginasFuentes;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JSpinner jSpinner1;
    private javax.swing.JSpinner jSpinner2;
    private javax.swing.JTable jTable1;
    private javax.swing.JLabel lblCantidadPaginas;
    private javax.swing.JLabel lblDesdePaginacion;
    private javax.swing.JLabel lblEstadoConexion;
    private javax.swing.JLabel lblListadoPaginas;
    private javax.swing.JLabel lblPaginasFuentes;
    private javax.swing.JLabel lblPaginasPublicadas;
    private javax.swing.JTextField txtPaginasPublicadas;
    // End of variables declaration//GEN-END:variables
}

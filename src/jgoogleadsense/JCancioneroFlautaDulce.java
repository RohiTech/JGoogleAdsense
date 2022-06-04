/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package jgoogleadsense;

/**
 *
 * @author lauren
 */
public class JCancioneroFlautaDulce
{
    MyClass c = new MyClass();
    
    public JCancioneroFlautaDulce()
    {
        String documento = c.LeerArchivo(c.Obtener_Directorio_Actual() + "/src/jgoogleadsense/Contenido/xDocumento/Cancionero_Flauta_ dulce.doc");
        
        c.EstablecerDeUsuarioCorreo("");
        c.EstablecerClaveCorreo("@");
        c.EstablecerAUsuarioCorreo("@blogger.com");
        
        String texto = "", contenido = "\n\n", asunto = "";
        int k = 0;
        
        texto = documento;
        
        while(texto.indexOf("HYPERLINK") > 0)
        {
            try
            {
                k++;

                texto = texto.substring(texto.indexOf("HYPERLINK") + 34, texto.length());
                asunto = asunto + texto.substring(0, texto.indexOf("	 PAGEREF")) + "\n";
                texto = texto.substring(texto.indexOf("	 PAGEREF"), texto.length());
            }
            catch(Exception e)
            {
                
            }
            
        }
        
        asunto = asunto.replace("	", "");
        asunto = asunto.replace(".	", "");
        asunto = asunto.replace(".", "");
        asunto = asunto.replace("á", "a");
        asunto = asunto.replace("á", "a");
        asunto = asunto.replace("á", "a");
        
        asunto = asunto.replace("á", "a");
        
        System.out.println(asunto);
        
        //c.EnviarCorreo(c.ObtenerDeUsuarioCorreo(), c.ObtenerClaveCorreo(), c.ObtenerAUsuarioCorreo(), asunto, contenido);
                
        k = 0;
    }
}

public class Persona {
    protected int edad;
    protected String nombre;
    protected String telefono;

    public Persona(int edad, String nombre, String telefono) {
        this.edad = edad;
        this.nombre = nombre;
        this.telefono = telefono;
    }

    public void mostrarDatos() {
        System.out.println("Nombre: " + nombre);
        System.out.println("Edad: " + edad);
        System.out.println("Teléfono: " + telefono);
    }
}

public class Cliente extends Persona {
    private double credito;

    public Cliente(int edad, String nombre, String telefono, double credito) {
        super(edad, nombre, telefono);
        this.credito = credito;
    }

    public void mostrarDatos() {
        super.mostrarDatos();
        System.out.println("Crédito: " + credito);
    }
}

public class Trabajador extends Persona {
    private double salario;

    public Trabajador(int edad, String nombre, String telefono, double salario) {
        super(edad, nombre, telefono);
        this.salario = salario;
    }

    public void mostrarDatos() {
        super.mostrarDatos();
        System.out.println("Salario: " + salario);
    }
}

public class Main {
    public static void main(String[] args) {
        Cliente cliente = new Cliente(30, "Juan", "123456789", 5000.0);
        cliente.mostrarDatos();

        Trabajador trabajador = new Trabajador(25, "Ana", "987654321", 8000.0);
        trabajador.mostrarDatos();
    }
}

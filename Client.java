
public class Client {
    public static void main(String[] args) {
    
        SingletonCarFactory factory =  SingletonCarFactory.getInstancy();

            factory.buildCar("Palio", "Popular");
            factory.buildCar("Gol", "Popular");
            factory.buildCar("Siena", "Luxo");
            factory.buildCar("Voyage", "Luxo");
         
         System.out.println(factory.getTotal());
        
    }
    
}

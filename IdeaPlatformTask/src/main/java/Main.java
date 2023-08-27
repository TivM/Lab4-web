import com.google.gson.Gson;

import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        HashMap<String, Integer> carrierToMinTime = new HashMap<>();

        Gson gson = new Gson();

        try (Reader reader = new FileReader("tickets.json")) {

            // Convert JSON File to Java Object
            Root root = gson.fromJson(reader, Root.class);

            List<Ticket> tickets = root.getTickets();

            //Минимальное время полета между городами Владивосток и Тель-Авив для каждого авиаперевозчика

            for (Ticket ticket : tickets) {
                String[] partsOfArrivalTime = ticket.getArrival_time().split(":");
                String[] partsOfDepartureTime = ticket.getDeparture_time().split(":");
                int diff = Integer.parseInt(partsOfArrivalTime[0]) * 60 + Integer.parseInt(partsOfArrivalTime[1])
                        - Integer.parseInt(partsOfDepartureTime[0]) * 60 - Integer.parseInt(partsOfDepartureTime[1]);

                if (!carrierToMinTime.containsKey(ticket.getCarrier())) {
                    carrierToMinTime.put(ticket.getCarrier(), diff);
                } else {
                    if (carrierToMinTime.get(ticket.getCarrier()) > diff) {
                        carrierToMinTime.put(ticket.getCarrier(), diff);
                    }
                }
            }

            System.out.println("Минимальное время полета между городами для каждого авиаперевозчика:");


            carrierToMinTime.forEach(
                    (key, value) -> System.out.println(key + " " + value / 60 + "ч." + value % 60 + "мин.")
            );

            //-----------------------------------------------------------------------------------------------------


            //Разница между средней ценой  и медианой для полета между городами  Владивосток и Тель-Авив

            double sumPrice = tickets.stream().mapToInt(Ticket::getPrice).sum();
            double avgPrice = sumPrice / tickets.size();

            tickets.sort(Comparator.comparingInt(Ticket::getPrice));
            double median = 0;
            if (tickets.size() % 2 == 0) {
                median = ((double) tickets.get(tickets.size() / 2).getPrice()
                        + (double) tickets.get((tickets.size() / 2) - 1).getPrice()) / 2;
            } else {
                median = tickets.get(tickets.size() / 2).getPrice();
            }

            System.out.println("Разница между средней ценой и медианой: " + (avgPrice - median));


        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

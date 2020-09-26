let str = `
Last login: Mon Apr 13 18:39:36 on ttys006
junking@JunkingdeMacBook-Pro-3973 ~ % ipconfig
usage: ipconfig <command> <args>
where <command> is one of waitall, getifaddr, ifcount, getoption, getpacket, getv6packet, set, setverbose
junking@JunkingdeMacBook-Pro-3973 ~ % ifconfig
lo0: flags=8049<UP,LOOPBACK,RUNNING,MULTICAST> mtu 16384
\toptions=1203<RXCSUM,TXCSUM,TXSTATUS,SW_TIMESTAMP>
\tinet 127.0.0.1 netmask 0xff000000 
\tinet6 ::1 prefixlen 128 
\tinet6 fe80::1%lo0 prefixlen 64 scopeid 0x1 
\tnd6 options=201<PERFORMNUD,DAD>
gif0: flags=8010<POINTOPOINT,MULTICAST> mtu 1280
stf0: flags=0<> mtu 1280
en0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
\toptions=400<CHANNEL_IO>
\tether 38:f9:d3:c9:dd:44 
\tinet6 fe80::14ae:288c:dcef:9475%en0 prefixlen 64 secured scopeid 0x4 
\tinet 192.168.43.177 netmask 0xffffff00 broadcast 192.168.43.255
\tnd6 options=201<PERFORMNUD,DAD>
\tmedia: autoselect
\tstatus: active
bridge0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
\toptions=63<RXCSUM,TXCSUM,TSO4,TSO6>
\tether 82:dd:bf:63:d4:01 
\tConfiguration:
\t\tid 0:0:0:0:0:0 priority 0 hellotime 0 fwddelay 0
\t\tmaxage 0 holdcnt 0 proto stp maxaddr 100 timeout 1200
\t\troot id 0:0:0:0:0:0 priority 0 ifcost 0 port 0
\t\tipfilter disabled flags 0x2
\tmember: en1 flags=3<LEARNING,DISCOVER>
\t        ifmaxaddr 0 port 6 priority 0 path cost 0
\tmember: en2 flags=3<LEARNING,DISCOVER>
\t        ifmaxaddr 0 port 7 priority 0 path cost 0
\tnd6 options=201<PERFORMNUD,DAD>
\tmedia: <unknown type>
\tstatus: inactive
en1: flags=8963<UP,BROADCAST,SMART,RUNNING,PROMISC,SIMPLEX,MULTICAST> mtu 1500
\toptions=460<TSO4,TSO6,CHANNEL_IO>
\tether 82:dd:bf:63:d4:01 
\tmedia: autoselect <full-duplex>
\tstatus: inactive
en2: flags=8963<UP,BROADCAST,SMART,RUNNING,PROMISC,SIMPLEX,MULTICAST> mtu 1500
\toptions=460<TSO4,TSO6,CHANNEL_IO>
\tether 82:dd:bf:63:d4:00 
\tmedia: autoselect <full-duplex>
\tstatus: inactive
p2p0: flags=8843<UP,BROADCAST,RUNNING,SIMPLEX,MULTICAST> mtu 2304
\toptions=400<CHANNEL_IO>
\tether 0a:f9:d3:c9:dd:44 
\tmedia: autoselect
\tstatus: inactive
awdl0: flags=8943<UP,BROADCAST,RUNNING,PROMISC,SIMPLEX,MULTICAST> mtu 1484
\toptions=400<CHANNEL_IO>
\tether 7a:4a:3e:8b:2f:21 
\tinet6 fe80::784a:3eff:fe8b:2f21%awdl0 prefixlen 64 scopeid 0x9 
\tnd6 options=201<PERFORMNUD,DAD>
\tmedia: autoselect
\tstatus: active
llw0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
\toptions=400<CHANNEL_IO>
\tether 7a:4a:3e:8b:2f:21 
\tinet6 fe80::784a:3eff:fe8b:2f21%llw0 prefixlen 64 scopeid 0xa 
\tnd6 options=201<PERFORMNUD,DAD>
\tmedia: autoselect
\tstatus: active
utun0: flags=8051<UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1380
\tinet6 fe80::a1d9:315b:67e0:3aa0%utun0 prefixlen 64 scopeid 0xb 
\tnd6 options=201<PERFORMNUD,DAD>
utun1: flags=8051<UP,POINTOPOINT,RUNNING,MULTICAST> mtu 2000
\tinet6 fe80::3f1f:489:ccc4:c06b%utun1 prefixlen 64 scopeid 0xc 
\tnd6 options=201<PERFORMNUD,DAD>
utun2: flags=8051<UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1380
\tinet6 fe80::dd76:dfaf:974a:db43%utun2 prefixlen 64 scopeid 0xd 
\tnd6 options=201<PERFORMNUD,DAD>
utun3: flags=8051<UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1380
\tinet6 fe80::f74a:b513:aea8:6e69%utun3 prefixlen 64 scopeid 0xe 
\tnd6 options=201<PERFORMNUD,DAD>
utun4: flags=8051<UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1380
\tinet6 fe80::f22f:784d:9247:b8bc%utun4 prefixlen 64 scopeid 0x10 
\tnd6 options=201<PERFORMNUD,DAD>
junking@JunkingdeMacBook-Pro-3973 ~ % ifconfig
lo0: flags=8049<UP,LOOPBACK,RUNNING,MULTICAST> mtu 16384
\toptions=1203<RXCSUM,TXCSUM,TXSTATUS,SW_TIMESTAMP>
\tinet 127.0.0.1 netmask 0xff000000 
\tinet6 ::1 prefixlen 128 
\tinet6 fe80::1%lo0 prefixlen 64 scopeid 0x1 
\tnd6 options=201<PERFORMNUD,DAD>
gif0: flags=8010<POINTOPOINT,MULTICAST> mtu 1280
stf0: flags=0<> mtu 1280
en0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
\toptions=400<CHANNEL_IO>
\tether 38:f9:d3:c9:dd:44 
\tinet6 fe80::14ae:288c:dcef:9475%en0 prefixlen 64 secured scopeid 0x4 
\tinet 192.168.43.177 netmask 0xffffff00 broadcast 192.168.43.255
\tnd6 options=201<PERFORMNUD,DAD>
\tmedia: autoselect
\tstatus: active
bridge0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
\toptions=63<RXCSUM,TXCSUM,TSO4,TSO6>
\tether 82:dd:bf:63:d4:01 
\tConfiguration:
\t\tid 0:0:0:0:0:0 priority 0 hellotime 0 fwddelay 0
\t\tmaxage 0 holdcnt 0 proto stp maxaddr 100 timeout 1200
\t\troot id 0:0:0:0:0:0 priority 0 ifcost 0 port 0
\t\tipfilter disabled flags 0x2
\tmember: en1 flags=3<LEARNING,DISCOVER>
\t        ifmaxaddr 0 port 6 priority 0 path cost 0
\tmember: en2 flags=3<LEARNING,DISCOVER>
\t        ifmaxaddr 0 port 7 priority 0 path cost 0
\tnd6 options=201<PERFORMNUD,DAD>
\tmedia: <unknown type>
\tstatus: inactive
en1: flags=8963<UP,BROADCAST,SMART,RUNNING,PROMISC,SIMPLEX,MULTICAST> mtu 1500
\toptions=460<TSO4,TSO6,CHANNEL_IO>
\tether 82:dd:bf:63:d4:01 
\tmedia: autoselect <full-duplex>
\tstatus: inactive
en2: flags=8963<UP,BROADCAST,SMART,RUNNING,PROMISC,SIMPLEX,MULTICAST> mtu 1500
\toptions=460<TSO4,TSO6,CHANNEL_IO>
\tether 82:dd:bf:63:d4:00 
\tmedia: autoselect <full-duplex>
\tstatus: inactive
p2p0: flags=8843<UP,BROADCAST,RUNNING,SIMPLEX,MULTICAST> mtu 2304
\toptions=400<CHANNEL_IO>
\tether 0a:f9:d3:c9:dd:44 
\tmedia: autoselect
\tstatus: inactive
awdl0: flags=8943<UP,BROADCAST,RUNNING,PROMISC,SIMPLEX,MULTICAST> mtu 1484
\toptions=400<CHANNEL_IO>
\tether 7a:4a:3e:8b:2f:21 
\tinet6 fe80::784a:3eff:fe8b:2f21%awdl0 prefixlen 64 scopeid 0x9 
\tnd6 options=201<PERFORMNUD,DAD>
\tmedia: autoselect
\tstatus: active
llw0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
\toptions=400<CHANNEL_IO>
\tether 7a:4a:3e:8b:2f:21 
\tinet6 fe80::784a:3eff:fe8b:2f21%llw0 prefixlen 64 scopeid 0xa 
\tnd6 options=201<PERFORMNUD,DAD>
\tmedia: autoselect
\tstatus: active
utun0: flags=8051<UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1380
\tinet6 fe80::a1d9:315b:67e0:3aa0%utun0 prefixlen 64 scopeid 0xb 
\tnd6 options=201<PERFORMNUD,DAD>
utun1: flags=8051<UP,POINTOPOINT,RUNNING,MULTICAST> mtu 2000
\tinet6 fe80::3f1f:489:ccc4:c06b%utun1 prefixlen 64 scopeid 0xc 
\tnd6 options=201<PERFORMNUD,DAD>
utun2: flags=8051<UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1380
\tinet6 fe80::dd76:dfaf:974a:db43%utun2 prefixlen 64 scopeid 0xd 
\tnd6 options=201<PERFORMNUD,DAD>
utun3: flags=8051<UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1380
\tinet6 fe80::f74a:b513:aea8:6e69%utun3 prefixlen 64 scopeid 0xe 
\tnd6 options=201<PERFORMNUD,DAD>
utun4: flags=8051<UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1380
\tinet6 fe80::f22f:784d:9247:b8bc%utun4 prefixlen 64 scopeid 0x10 
\tnd6 options=201<PERFORMNUD,DAD>
junking@JunkingdeMacBook-Pro-3973 ~ % ifconfig
lo0: flags=8049<UP,LOOPBACK,RUNNING,MULTICAST> mtu 16384
\toptions=1203<RXCSUM,TXCSUM,TXSTATUS,SW_TIMESTAMP>
\tinet 127.0.0.1 netmask 0xff000000 
\tinet6 ::1 prefixlen 128 
\tinet6 fe80::1%lo0 prefixlen 64 scopeid 0x1 
\tnd6 options=201<PERFORMNUD,DAD>
gif0: flags=8010<POINTOPOINT,MULTICAST> mtu 1280
stf0: flags=0<> mtu 1280
en0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
\toptions=400<CHANNEL_IO>
\tether 38:f9:d3:c9:dd:44 
\tinet6 fe80::14ae:288c:dcef:9475%en0 prefixlen 64 secured scopeid 0x4 
\tinet 192.168.43.177 netmask 0xffffff00 broadcast 192.168.43.255
\tnd6 options=201<PERFORMNUD,DAD>
\tmedia: autoselect
\tstatus: active
bridge0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
\toptions=63<RXCSUM,TXCSUM,TSO4,TSO6>
\tether 82:dd:bf:63:d4:01 
\tConfiguration:
\t\tid 0:0:0:0:0:0 priority 0 hellotime 0 fwddelay 0
\t\tmaxage 0 holdcnt 0 proto stp maxaddr 100 timeout 1200
\t\troot id 0:0:0:0:0:0 priority 0 ifcost 0 port 0
\t\tipfilter disabled flags 0x2
\tmember: en1 flags=3<LEARNING,DISCOVER>
\t        ifmaxaddr 0 port 6 priority 0 path cost 0
\tmember: en2 flags=3<LEARNING,DISCOVER>
\t        ifmaxaddr 0 port 7 priority 0 path cost 0
\tnd6 options=201<PERFORMNUD,DAD>
\tmedia: <unknown type>
\tstatus: inactive
en1: flags=8963<UP,BROADCAST,SMART,RUNNING,PROMISC,SIMPLEX,MULTICAST> mtu 1500
\toptions=460<TSO4,TSO6,CHANNEL_IO>
\tether 82:dd:bf:63:d4:01 
\tmedia: autoselect <full-duplex>
\tstatus: inactive
en2: flags=8963<UP,BROADCAST,SMART,RUNNING,PROMISC,SIMPLEX,MULTICAST> mtu 1500
\toptions=460<TSO4,TSO6,CHANNEL_IO>
\tether 82:dd:bf:63:d4:00 
\tmedia: autoselect <full-duplex>
\tstatus: inactive
p2p0: flags=8843<UP,BROADCAST,RUNNING,SIMPLEX,MULTICAST> mtu 2304
\toptions=400<CHANNEL_IO>
\tether 0a:f9:d3:c9:dd:44 
\tmedia: autoselect
\tstatus: inactive
awdl0: flags=8943<UP,BROADCAST,RUNNING,PROMISC,SIMPLEX,MULTICAST> mtu 1484
\toptions=400<CHANNEL_IO>
\tether 7a:4a:3e:8b:2f:21 
\tinet6 fe80::784a:3eff:fe8b:2f21%awdl0 prefixlen 64 scopeid 0x9 
\tnd6 options=201<PERFORMNUD,DAD>
\tmedia: autoselect
\tstatus: active
llw0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
\toptions=400<CHANNEL_IO>
\tether 7a:4a:3e:8b:2f:21 
\tinet6 fe80::784a:3eff:fe8b:2f21%llw0 prefixlen 64 scopeid 0xa 
\tnd6 options=201<PERFORMNUD,DAD>
\tmedia: autoselect
\tstatus: active
utun0: flags=8051<UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1380
\tinet6 fe80::a1d9:315b:67e0:3aa0%utun0 prefixlen 64 scopeid 0xb 
\tnd6 options=201<PERFORMNUD,DAD>
utun1: flags=8051<UP,POINTOPOINT,RUNNING,MULTICAST> mtu 2000
\tinet6 fe80::3f1f:489:ccc4:c06b%utun1 prefixlen 64 scopeid 0xc 
\tnd6 options=201<PERFORMNUD,DAD>
utun2: flags=8051<UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1380
\tinet6 fe80::dd76:dfaf:974a:db43%utun2 prefixlen 64 scopeid 0xd 
\tnd6 options=201<PERFORMNUD,DAD>
utun3: flags=8051<UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1380
\tinet6 fe80::f74a:b513:aea8:6e69%utun3 prefixlen 64 scopeid 0xe 
\tnd6 options=201<PERFORMNUD,DAD>
utun4: flags=8051<UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1380
\tinet6 fe80::f22f:784d:9247:b8bc%utun4 prefixlen 64 scopeid 0x10 
\tnd6 options=201<PERFORMNUD,DAD>
junking@JunkingdeMacBook-Pro-3973 ~ % ifconfig
lo0: flags=8049<UP,LOOPBACK,RUNNING,MULTICAST> mtu 16384
\toptions=1203<RXCSUM,TXCSUM,TXSTATUS,SW_TIMESTAMP>
\tinet 127.0.0.1 netmask 0xff000000 
\tinet6 ::1 prefixlen 128 
\tinet6 fe80::1%lo0 prefixlen 64 scopeid 0x1 
\tnd6 options=201<PERFORMNUD,DAD>
gif0: flags=8010<POINTOPOINT,MULTICAST> mtu 1280
stf0: flags=0<> mtu 1280
en0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
\toptions=400<CHANNEL_IO>
\tether 38:f9:d3:c9:dd:44 
\tinet6 fe80::14ae:288c:dcef:9475%en0 prefixlen 64 secured scopeid 0x4 
\tinet 192.168.43.177 netmask 0xffffff00 broadcast 192.168.43.255
\tnd6 options=201<PERFORMNUD,DAD>
\tmedia: autoselect
\tstatus: active
bridge0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
\toptions=63<RXCSUM,TXCSUM,TSO4,TSO6>
\tether 82:dd:bf:63:d4:01 
\tConfiguration:
\t\tid 0:0:0:0:0:0 priority 0 hellotime 0 fwddelay 0
\t\tmaxage 0 holdcnt 0 proto stp maxaddr 100 timeout 1200
\t\troot id 0:0:0:0:0:0 priority 0 ifcost 0 port 0
\t\tipfilter disabled flags 0x2
\tmember: en1 flags=3<LEARNING,DISCOVER>
\t        ifmaxaddr 0 port 6 priority 0 path cost 0
\tmember: en2 flags=3<LEARNING,DISCOVER>
\t        ifmaxaddr 0 port 7 priority 0 path cost 0
\tnd6 options=201<PERFORMNUD,DAD>
\tmedia: <unknown type>
\tstatus: inactive
en1: flags=8963<UP,BROADCAST,SMART,RUNNING,PROMISC,SIMPLEX,MULTICAST> mtu 1500
\toptions=460<TSO4,TSO6,CHANNEL_IO>
\tether 82:dd:bf:63:d4:01 
\tmedia: autoselect <full-duplex>
\tstatus: inactive
en2: flags=8963<UP,BROADCAST,SMART,RUNNING,PROMISC,SIMPLEX,MULTICAST> mtu 1500
\toptions=460<TSO4,TSO6,CHANNEL_IO>
\tether 82:dd:bf:63:d4:00 
\tmedia: autoselect <full-duplex>
\tstatus: inactive
p2p0: flags=8843<UP,BROADCAST,RUNNING,SIMPLEX,MULTICAST> mtu 2304
\toptions=400<CHANNEL_IO>
\tether 0a:f9:d3:c9:dd:44 
\tmedia: autoselect
\tstatus: inactive
awdl0: flags=8943<UP,BROADCAST,RUNNING,PROMISC,SIMPLEX,MULTICAST> mtu 1484
\toptions=400<CHANNEL_IO>
\tether 7a:4a:3e:8b:2f:21 
\tinet6 fe80::784a:3eff:fe8b:2f21%awdl0 prefixlen 64 scopeid 0x9 
\tnd6 options=201<PERFORMNUD,DAD>
\tmedia: autoselect
\tstatus: active
llw0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
\toptions=400<CHANNEL_IO>
\tether 7a:4a:3e:8b:2f:21 
\tinet6 fe80::784a:3eff:fe8b:2f21%llw0 prefixlen 64 scopeid 0xa 
\tnd6 options=201<PERFORMNUD,DAD>
\tmedia: autoselect
\tstatus: active
utun0: flags=8051<UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1380
\tinet6 fe80::a1d9:315b:67e0:3aa0%utun0 prefixlen 64 scopeid 0xb 
\tnd6 options=201<PERFORMNUD,DAD>
utun1: flags=8051<UP,POINTOPOINT,RUNNING,MULTICAST> mtu 2000
\tinet6 fe80::3f1f:489:ccc4:c06b%utun1 prefixlen 64 scopeid 0xc 
\tnd6 options=201<PERFORMNUD,DAD>
utun2: flags=8051<UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1380
\tinet6 fe80::dd76:dfaf:974a:db43%utun2 prefixlen 64 scopeid 0xd 
\tnd6 options=201<PERFORMNUD,DAD>
utun3: flags=8051<UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1380
\tinet6 fe80::f74a:b513:aea8:6e69%utun3 prefixlen 64 scopeid 0xe 
\tnd6 options=201<PERFORMNUD,DAD>
utun4: flags=8051<UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1380
\tinet6 fe80::f22f:784d:9247:b8bc%utun4 prefixlen 64 scopeid 0x10 
\tnd6 options=201<PERFORMNUD,DAD>
junking@JunkingdeMacBook-Pro-3973 ~ % ifconfig
lo0: flags=8049<UP,LOOPBACK,RUNNING,MULTICAST> mtu 16384
\toptions=1203<RXCSUM,TXCSUM,TXSTATUS,SW_TIMESTAMP>
\tinet 127.0.0.1 netmask 0xff000000 
\tinet6 ::1 prefixlen 128 
\tinet6 fe80::1%lo0 prefixlen 64 scopeid 0x1 
\tnd6 options=201<PERFORMNUD,DAD>
gif0: flags=8010<POINTOPOINT,MULTICAST> mtu 1280
stf0: flags=0<> mtu 1280
en0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
\toptions=400<CHANNEL_IO>
\tether 38:f9:d3:c9:dd:44 
\tinet6 fe80::14ae:288c:dcef:9475%en0 prefixlen 64 secured scopeid 0x4 
\tinet 192.168.43.177 netmask 0xffffff00 broadcast 192.168.43.255
\tnd6 options=201<PERFORMNUD,DAD>
\tmedia: autoselect
\tstatus: active
bridge0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
\toptions=63<RXCSUM,TXCSUM,TSO4,TSO6>
\tether 82:dd:bf:63:d4:01 
\tConfiguration:
\t\tid 0:0:0:0:0:0 priority 0 hellotime 0 fwddelay 0
\t\tmaxage 0 holdcnt 0 proto stp maxaddr 100 timeout 1200
\t\troot id 0:0:0:0:0:0 priority 0 ifcost 0 port 0
\t\tipfilter disabled flags 0x2
\tmember: en1 flags=3<LEARNING,DISCOVER>
\t        ifmaxaddr 0 port 6 priority 0 path cost 0
\tmember: en2 flags=3<LEARNING,DISCOVER>
\t        ifmaxaddr 0 port 7 priority 0 path cost 0
\tnd6 options=201<PERFORMNUD,DAD>
\tmedia: <unknown type>
\tstatus: inactive
en1: flags=8963<UP,BROADCAST,SMART,RUNNING,PROMISC,SIMPLEX,MULTICAST> mtu 1500
\toptions=460<TSO4,TSO6,CHANNEL_IO>
\tether 82:dd:bf:63:d4:01 
\tmedia: autoselect <full-duplex>
\tstatus: inactive
en2: flags=8963<UP,BROADCAST,SMART,RUNNING,PROMISC,SIMPLEX,MULTICAST> mtu 1500
\toptions=460<TSO4,TSO6,CHANNEL_IO>
\tether 82:dd:bf:63:d4:00 
\tmedia: autoselect <full-duplex>
\tstatus: inactive
p2p0: flags=8843<UP,BROADCAST,RUNNING,SIMPLEX,MULTICAST> mtu 2304
\toptions=400<CHANNEL_IO>
\tether 0a:f9:d3:c9:dd:44 
\tmedia: autoselect
\tstatus: inactive
awdl0: flags=8943<UP,BROADCAST,RUNNING,PROMISC,SIMPLEX,MULTICAST> mtu 1484
\toptions=400<CHANNEL_IO>
\tether 7a:4a:3e:8b:2f:21 
\tinet6 fe80::784a:3eff:fe8b:2f21%awdl0 prefixlen 64 scopeid 0x9 
\tnd6 options=201<PERFORMNUD,DAD>
\tmedia: autoselect
\tstatus: active
llw0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
\toptions=400<CHANNEL_IO>
\tether 7a:4a:3e:8b:2f:21 
\tinet6 fe80::784a:3eff:fe8b:2f21%llw0 prefixlen 64 scopeid 0xa 
\tnd6 options=201<PERFORMNUD,DAD>
\tmedia: autoselect
\tstatus: active
utun0: flags=8051<UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1380
\tinet6 fe80::a1d9:315b:67e0:3aa0%utun0 prefixlen 64 scopeid 0xb 
\tnd6 options=201<PERFORMNUD,DAD>
utun1: flags=8051<UP,POINTOPOINT,RUNNING,MULTICAST> mtu 2000
\tinet6 fe80::3f1f:489:ccc4:c06b%utun1 prefixlen 64 scopeid 0xc 
\tnd6 options=201<PERFORMNUD,DAD>
utun2: flags=8051<UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1380
\tinet6 fe80::dd76:dfaf:974a:db43%utun2 prefixlen 64 scopeid 0xd 
\tnd6 options=201<PERFORMNUD,DAD>
utun3: flags=8051<UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1380
\tinet6 fe80::f74a:b513:aea8:6e69%utun3 prefixlen 64 scopeid 0xe 
\tnd6 options=201<PERFORMNUD,DAD>
utun4: flags=8051<UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1380
\tinet6 fe80::f22f:784d:9247:b8bc%utun4 prefixlen 64 scopeid 0x10 
\tnd6 options=201<PERFORMNUD,DAD>
junking@JunkingdeMacBook-Pro-3973 ~ % 

`;

let str2 = `das0ds0adsad9sa0d9sa0d9as06s5da7das67as6d`;

let json = str2.search(/\d/);

console.log(json);
